//Include and cofigure this script in the client side to use socket.io with the server

// Include in document
// <script type="text/javascript" src="//code.jquery.com/jquery-1.4.2.min.js"></script>
// <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.0/socket.io.min.js"></script>

var socket;
const LOGIN_URL = '/login';
const SEND_BUTTON_ID = '#send';
const LEAVE_BUTTON_ID = '#leave';
const CHAT_BOX_ID = '#chat';
const MESSAGE_BOX_ID = '#message';
const BACKEND_CHAT_URL = 'http://127.0.0.1/chat';


$(document).ready(function() {
	socket = io.connect(BACKEND_CHAT_URL);
	socket.on('connect', function() {
		socket.emit('status', {'action': 'join'});
	});
	socket.on('status', function(data) {
		$(CHAT_BOX_ID).val($(CHAT_BOX_ID).val()+'<'+data.message+'>\n');
		$(CHAT_BOX_ID).scrollTop($(CHAT_BOX_ID)[0].scrollHeight);
	});
	socket.on('send', function(data) {
		$(CHAT_BOX_ID).val($(CHAT_BOX_ID).val()+data.username+': '+data.message+'\n');
		$(CHAT_BOX_ID).scrollTop($(CHAT_BOX_ID)[0].scrollHeight);
	});
	$(SEND_BUTTON_ID).click(function() {
		socket.emit('send', {message: $(MESSAGE_BOX_ID).val()});
		$(MESSAGE_BOX_ID).val('');
	});
	$(LEAVE_BUTTON_ID).click(function() {
		socket.emit('status', {'action': 'leave'}, function() {
			socket.disconnect();
			window.location.href = LOGIN_URL;
		});
	});
});