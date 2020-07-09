$(document).ready(function () {
	$.fn.dataTable.moment('LLL', 'ru');
	$('#afisha_table').DataTable({
		'order': [1, 'asc'],
		'autoWidth': true,
		'lengthChange': false,
		'paging': false,
		'info': false,
		'searching': false,
		'language': {
			'url': '//cdn.datatables.net/plug-ins/1.10.12/i18n/Russian.json'
		}
	});

	$('#datetimepicker').datetimepicker({
		format: 'yyyy-mm-dd hh:ii',
		weekStart: 1,
		autoclose: true,
		clearBtn: true,
		todayHighlight: true,
		language: 'ru',
		minuteStep: 10
	});
});