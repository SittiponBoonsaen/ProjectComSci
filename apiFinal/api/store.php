<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
ini_set('display_errors',1);
error_reporting(E_ALL);

$app->post('/store/add', function (Request $request, Response $response, array $args) {
    $conn = $GLOBALS['dbconn'];
    $body = $request->getBody();
    $bodyArray = json_decode($body, true);
    $stmt = $conn->prepare("INSERT INTO store (name_store,address_store,telephone_store,rules_store,status_store,owner_store) values(?,?,?,?,?,?)");
    $stmt ->bind_param('ssssss', $bodyArray['name_store'],$bodyArray['address_store'],$bodyArray['telephone_store']
    ,$bodyArray['rules_store'],$bodyArray['status_store'],$bodyArray['owner_store']);
    $stmt->execute();
    $result = $stmt ->affected_rows;
    $response->getBody() ->write($result." ");
    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/store/edit', function (Request $request, Response $response, array $args) {
    $conn = $GLOBALS['dbconn']; 
    $body = $request->getBody();
    $bodyArray = json_decode($body, true);
    $stmt = $conn->prepare("UPDATE store SET name_store=?, address_store=?,telephone_store=?,rules_store=?,status_store=? WHERE id_store= ?");
    $stmt ->bind_param('ssssss', $bodyArray['name_store'],$bodyArray['address_store'],$bodyArray['telephone_store']
    ,$bodyArray['rules_store'],$bodyArray['status_store'],$bodyArray['id_store']);
    $stmt->execute();
    $result = $stmt ->affected_rows;
    $response->getBody() ->write($result." ");
    return $response->withHeader('Content-Type', 'application/json');
});



$app->post('/getOwnerstore', function (Request $request, Response $response, array $args) {
    $body = $request->getBody();
    $bodyArray = json_decode($body,true);
    $conn = $GLOBALS['dbconn'];
    $stmt = $conn->prepare("SELECT * FROM store WHERE owner_store = ? ");
    $stmt->bind_param("s",$bodyArray['owner_store']);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    while($row = $result ->fetch_assoc()){
        array_push($data,$row);
    }
    $json = json_encode($data);
    $response->getBody()->write($json);
    return $response->withHeader('Content-Type', 'application/json');
});


?>
