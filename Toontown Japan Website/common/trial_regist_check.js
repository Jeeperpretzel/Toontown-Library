function ChkALL() {

	var email_address_val  = document.register.e.value;
	var email_address2_val = document.register.ec.value;
	var password_val       = document.register.p.value;
	var password2_val      = document.register.pc.value;
	var birthday_year_val      = document.register.b1.value;
	var birthday_month_option  = document.forms.register.b2.options;
	var birthday_month_val     = birthday_month_option[birthday_month_option.selectedIndex].value;
	var birthday_day_option    = document.forms.register.b3.options;
	var birthday_day_month_val = birthday_day_option[birthday_day_option.selectedIndex].value;

	if( !email_address_val ){
		alert("E���[���A�h���X����͂��Ă��������B");
		return false;
		
	}else if( chkMail(email_address_val) == 1 ){
		alert("E���[���A�h���X���s���ł��B");
		return false;
		
	}else if( chkMobile(email_address_val) == 1 ){
		alert("�g�ѓd�b�̃��[���A�h���X�͎w��ł��܂���B");
		return false;
		
	}else if( checkUniqueScr(email_address_val) ){
		alert("E���[���A�h���X�ɓ��ꕶ���͓��͂ł��܂���B");
		return false;

	}else if( !email_address2_val ){
		alert("E���[���A�h���X�i�m�F�p�j����͂��Ă��������B");
		return false;

	}else if( chkMail(email_address2_val) == 1 ){
		alert("E���[���A�h���X���s���ł��B");
		return false;
		
	}else if( checkUniqueScr(email_address2_val) ){
		alert("E���[���A�h���X�ɓ��ꕶ���͓��͂ł��܂���B");
		return false;
		
	}else if( email_address_val != email_address2_val ){
		alert("E���[���A�h���X����v���܂���B�ēx���͂��Ă��������B");
		return false;

	}else if( !password_val ){
		alert("�p�X���[�h����͂��Ă��������B");
		return false;
	
	}else if( password_val.length<6 ){
		alert("�p�X���[�h��6�����ȏ�œ��͂��Ă��������B");
		return false;
		
	}else if( checkUniqueScr(password_val) ){
		alert("�p�X���[�h�ɓ��ꕶ���͓��͂ł��܂���B");
		return false;

	}else if( !password2_val ){
		alert("�p�X���[�h�i�m�F�p�j����͂��Ă��������B");
		return false;
		
	}else if( checkUniqueScr(password2_val) ){
		alert("�p�X���[�h�ɓ��ꕶ���͓��͂ł��܂���B");
		return false;
		
	}else if( password_val != password2_val ){
		alert("�p�X���[�h����v���܂���B�ēx���͂��Ă��������B");
		return false;
		
	}else if( !birthday_year_val ){
		alert("���N�����i�N�j��I�����Ă��������B");
		return false;
		
	}else if( !birthday_month_val ){
		alert("���N�����i���j��I�����Ă��������B");
		return false;

	}else if( !birthday_day_month_val ){
		alert("���N�����i���j��I�����Ă��������B");
		return false;
	
	}else if( !checkFuture( birthday_year_val, birthday_month_val, birthday_day_month_val ) ){
		alert("���N�������������w���Ă��܂��B");
		return false;

	}else if( !checkValidDate( birthday_year_val, birthday_month_val, birthday_day_month_val ) ){
		alert("���N���������������t�ł͂���܂���B");
		return false;

	}
	
	return true;
}

//���t�̐������`�F�b�N
function checkValidDate( y, m, d ) {
	if ( ( m == 4 || m ==  6 || m == 9 || m == 11 ) && d > 30 ) { return false; }
	if (   m == 2 && d >  29 ) { return false; }
	if (   m == 2 && d == 29 && !( ( y % 400 ) == 0 || ( y % 4 ) == 0 && ( y % 100 ) != 0 ) ) { return false; }
	return true;
}

//�����̓��t�`�F�b�N
function checkFuture( y, m, d ) {
	var today = new Date();
	if ( ( y - 1900 ) >  today.getYear() ||
	     ( y - 1900 ) == today.getYear() && ( m >  today.getMonth() + 1 ) ||
	     ( y - 1900 ) == today.getYear() && ( m == today.getMonth() + 1 ) && d > today.getDate() ) {
		return false;
	}
	return true;
}


//���l�`�F�b�N
function checkNum(checkword) {
	flag = isNaN(checkword);
	if(flag == true){
		return true;
	}
 	return false;
}

//�A�h���X�`�F�b�N
function chkMail(inAddr){
	indata = inAddr.match(/^\S+@\S+\.\S+$/);
	if(inAddr){
		if(!indata){
			return 1;
		}
	}
}

//���o�C���`�F�b�N
function chkMobile(Addr){
        data = new Array();
        data = Addr.split("@");
        mobile1 = "docomo\.ne";
        mobile2 = "jp\-";
        mobile3 = "\.ne";
        mobile4 = "ezweb\.ne";
        mobile5 = "phone\.ne";
     if(Addr){
        if((data[1].match(mobile1)) || ((data[1].match(mobile2)) && (data[1].match(mobile3))) || (data[1].match(mobile4)) || (data[1].match(mobile5))){
           return 1;
        }
     }
}

//���ꕶ���`�F�b�N
function checkUniqueScr(checkword) {
	result = checkword.match(/[\<\>\""\''\\\&\;]+/);
	if (result != null) {
		return 1;
	}
}


function openInquiry(url){
  subWin = window.open(url,"newWindow","toolbar=no,location=no,scrollbars=yes,status=no,menubar=no,resizable=yes,width=630,height=600");
}
