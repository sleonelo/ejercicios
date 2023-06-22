<?php
function sumar($a, $b) {
  return $a + $b;
}

$server = new SoapServer(null, array('uri' => 'http://localhost/soap-server/'));
$server->addFunction('sumar');
$server->handle();
