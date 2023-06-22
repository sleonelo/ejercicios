<?php

class  rs_server {
	var $metodoAEjecutar ;
	var $parametros ;
	var $huboError ;
	var $mensajeError ;
	function rs_server()  {
		$this->metodoAEjecutar = (isset($_POST['RS_MetodoAEjecutar']) ? $_POST['RS_MetodoAEjecutar'] : "-1");
		$this->parametros = (isset($_POST['RS_parametros'])?$_POST['RS_parametros']:array()) ;
	}
	function action() {
		
		try {
			$this->metodoAEjecutar = (isset($_POST['RS_MetodoAEjecutar']) ? $_POST['RS_MetodoAEjecutar'] : "-1");
			$this->parametros = (isset($_POST['RS_parametros'])?$_POST['RS_parametros']:array()) ;
			//echo "pepe: ".$this->metodoAEjecutar;

			$result = $this->{$this->metodoAEjecutar}( $this->parametros );

			if(!is_array($result)){
				$resultado["mensaje"]=$result;
				echo json_encode($resultado);
			}else{
				echo json_encode($result);
			}

		} catch (Exception $e) {
			$huboError = true;
			$mensajeError = $e.$e->getMessage();
			echo $mensajeError;
		}
		
	}

}

?>



