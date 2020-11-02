<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
ini_set('display_errors',1);
error_reporting(E_ALL);


$app->post('/field/add', function (Request $request, Response $response, array $args) {
    //date_default_timezone_set('Asia/Bangkok');
    //$DATETIME = date_create()->format('Y-m-d h:i:s');
    ////////////////////////
    $conn = $GLOBALS['dbconn'];
    $body = $request->getBody();
    $bodyArray = json_decode($body, true);
    $stmt = $conn->prepare("insert into field"."(id_store_field,name_field,service_field,
    size_field,price_field,status_field) "." values (?,?,?,?,?,?)");
    $stmt ->bind_param('ssssss', $bodyArray['id_store_field'], $bodyArray['name_field'], $bodyArray['service_field']
    , $bodyArray['size_field'], $bodyArray['price_field'], $bodyArray['status_field']);
    $stmt->execute();
    $result = $stmt ->affected_rows;
    $response->getBody() ->write($result." ");
    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/field/delete', function (Request $request, Response $response, array $args) {
    //date_default_timezone_set('Asia/Bangkok');
    //$DATETIME = date_create()->format('Y-m-d h:i:s');
    ////////////////////////
    $conn = $GLOBALS['dbconn'];
    $body = $request->getBody();
    $bodyArray = json_decode($body, true);
    $stmt = $conn->prepare("DELETE from picturefield where id_field = ?");
    $stmt ->bind_param('s', $bodyArray['id_field']);
    $stmt->execute();
    $result = $stmt ->affected_rows;
    $response->getBody() ->write($result." ");
    $stmt2 = $conn->prepare("DELETE from field where id_field = ?");
    $stmt2 ->bind_param('s', $bodyArray['id_field']);
    $stmt2->execute();
    $result = $stmt2 ->affected_rows;
    $response->getBody() ->write($result." ");
    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/field/add/picturefield', function (Request $request, Response $response, array $args) {
    $conn = $GLOBALS['dbconn'];
    $body = $request->getBody();
    $bodyArray = json_decode($body, true);
    $stmt = $conn->prepare("insert into picturefield "."(id_field,name_picturefield,picture_picturefield) "." values (?,?,?)");
    $stmt ->bind_param('sss', $bodyArray['id_field'], $bodyArray['name_picturefield'], $bodyArray['picture_picturefield']);
    $stmt->execute();
    $result = $stmt ->affected_rows;
    $response->getBody() ->write($result." ");
    return $response->withHeader('Content-Type', 'application/json');
});



?>
