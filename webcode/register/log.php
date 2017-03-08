<?php

header('Content-Type:text/html;charset=utf-8');
//连接数据库服务器
$conn = @mysql_connect('localhost','root','');
//是否连接成功
if (!$conn) {
	die('数据库连接失败！');
}
//选择数据库
mysql_select_db('users');
//执行数据库编码
mysql_query('set name utf8');
//根据用户名判断数据是否存在
$sql = "SELECT password FROM user WHERE name='$_POST[name]'";
//执行SQL获取资源
$rs = @mysql_query($sql);
$row = @mysql_fetch_assoc($rs);
if ($row) {
	//$password = mysql_query("SELECT password FROM users WHERE name ='$_POST[name]' ");
	//$password = mysql_fetch_assoc($password);
	if ($_POST['password'] == $row['password']){  //密码核对时需要将提交密码加密后判断
		$url = "../index.html";
		echo "<meta http-equiv=\"refresh\" content=\"0.1;url=$url\">";
	}else{
		$url = "log.html";
		echo "<meta http-equiv=\"refresh\" content=\"0.1;url=$url\">";

	}
}else{
	die('用户不存在!');
}
?>