<?php 

require('./MPDF57/mpdf.php');

$mpdf=new mPDF(); 

$html = '<h1 style="color:#45A;">Hola Mundo</h1>';

$mpdf->WriteHTML($html);
$mpdf->Output();
exit;ew 

?>