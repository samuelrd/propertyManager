<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PropertyManagerController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'home', defaults: ["reactRouting" => null], requirements: ["reactRouting" => "^(?!api).+"])]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }
}
