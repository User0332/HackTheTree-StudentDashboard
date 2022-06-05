from flask_session import Session
from flask_cors import CORS
from constants import *

from flask import (
	Flask,
	jsonify,
	request,
	session
)

from flask_socketio import (
	SocketIO,
	join_room,
	leave_room,
	emit
)



app = Flask(
	__name__, 
	template_folder=TEMPLATE_FOLDER,
	static_folder=STATIC_FOLDER
)

CORS(app)

app.config['SECRET_KEY'] = SECRET_KEY
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_PERMANENT'] = False

socketio = SocketIO(app, manage_session=False)

Session(app)

# FLASK METHODS

@app.before_first_request
def clear_session():
	session.pop('username', None)
	session.pop('room', None)

@app.errorhandler(404)
def page_not_found(e):
	return jsonify(
		{
			'success': False,
			'data': str(e)
		}
		), 404

def login(username, room):
	if room not in VALID_ROOMS:
		return {
			'success': False,
			'data': 'Invalid room'
		}

	session['username'] = username
	session['room'] = room

	return {
		'success': True,
		'data': f'Successfully logged into {room} in as {username}'
	}

@app.route("/api/<api_request>", methods=['GET'])
def api(api_request):
	if api_request == 'username':
		username = session.get('username', None)
		if username is not None:
			return jsonify(
				{
					'success': True,
					'data': username
				}
			)
		else:
			return jsonify(
				{
					'success': False,
					'data': 'No user logged in'
				}
			)
	elif api_request == 'room':
		room = session.get('room', None)
		if room is not None:
			return jsonify(
				{
					'success': True,
					'data': room
				}
			)
		else:
			return jsonify(
				{
					'success': False,
					'data': 'No user logged in to a room'
				}
			)
	elif api_request == 'login':
		username = request.args.get('username')
		room = request.args.get('room')

		return jsonify(
			login(username, room)
		)

	return jsonify(
		{
			'success': False,
			'data': 'Invalid request name'
		}
	)


# SOCKETIO METHODS

@socketio.on('send', namespace='/chat')
def send_message(data):
	emit(
		'send',
		{
			'username': session['username'],
			'message': data['message'] 
		},
		room=session['room']
	)

@socketio.on('status', namespace='/chat')
def status(data):
	room = session['room']
	username = session['username']

	if data['action'] == 'join':
		join_room(room)
		emit(
			'status',
			{
				'message': f"{username} has joined the room",
			},
			room=room
		)
		return

	leave_room(room)
	session.clear()

	emit(
		'status',
		{
			'message': f"{username} has left the room"
		},
		room=room
	)

	session.pop('username', None)
	session.pop('room', None)



if __name__ == '__main__':
	socketio.run(app, debug=True)