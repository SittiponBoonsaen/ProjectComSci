<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
ini_set('display_errors',1);
error_reporting(E_ALL);

$app->post('/store/add', function (Request $request, Response $response, array $args) {
    //date_default_timezone_set('Asia/Bangkok');
    //$DATETIME = date_create()->format('Y-m-d h:i:s');
    ////////////////////////
    $conn = $GLOBALS['dbconn'];
    $body = $request->getBody();
    $bodyArray = json_decode($body, true);
    //$stmt = $conn->prepare("insert into store"."(name_store,address_store,telephone_store) "." values (?,?,?)");
    $stmt = $conn->prepare("INSERT INTO addressstore (district_addressStore, amphures_addressStore,province_addressStore )
                                VALUES(?,?,?)");
    $stmt ->bind_param('sss', $bodyArray['selectedprovinceaddstore'],$bodyArray['selectedamphuresaddstore'],$bodyArray['selectedistrictssaddstore']);
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
