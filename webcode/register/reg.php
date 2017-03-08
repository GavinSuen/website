<?php

  //用户名是否为空；
  if ($_POST['regUserName']=='') {
  	exit('用户名不能为空');
  }
  if ($_POST['regUserPasw']==''||$_POST['regUserRepasw']=='') {
  	exit('密码不能为空');
  }
  if ($_POST['regUserPasw']!=$_POST['regUserRepasw']) {
  	exit('两次密码不相同');
  }

  $conn = @mysql_connect('localhost','root','');//连接数据库服务器
  
  mysql_select_db('users');
  //执行数据库编码
  mysql_query('set name utf8');
  //进行数据操作

  $sql = "SELECT * FROM user WHERE name='$_POST[regUserName]'";
  $rs = @mysql_query($sql);
  if(mysql_fetch_assoc($rs)){
  	exit('用户已存在!');
  }
  
  @ mysql_query("INSERT INTO user(name,phone,email,password) VALUES ('$_POST[regUserName]','$_POST[regUserPhone]','$_POST[regUserEmail]','$_POST[regUserRepasw]')");
    echo('注册成功！即将跳转回登录页面');
    $url = "log.html";
    echo "<meta http-equiv=\"refresh\" content=\"1;url=$url\">";
?>