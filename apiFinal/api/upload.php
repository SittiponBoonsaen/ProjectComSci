<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
ini_set('display_errors',1);
error_reporting(E_ALL);



$app->post('/uploadimg', function (Request $request, Response $response, array $args) {
   
    $conn = $GLOBALS['dbconn']; 
    $body = $request->getBody();
    $bodyArray = json_decode($body, true);
    $stmt = $conn->prepare("insert into images"."(image_name,images) "." values (?,?)"); 
    $stmt ->bind_param('ss', $bodyArray['image_name'],$bodyArray['images']);
    $stmt->execute(); 
    $result = $stmt ->affected_rows;
    $response->getBody() ->write($result." ");
    return $response->withHeader('Content-Type', 'application/json');

    
});



?>
