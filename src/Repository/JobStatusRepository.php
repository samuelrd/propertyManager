<?php

namespace App\Repository;

use App\Entity\JobStatus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method JobStatus|null find($id, $lockMode = null, $lockVersion = null)
 * @method JobStatus|null findOneBy(array $criteria, array $orderBy = null)
 * @method JobStatus[]    findAll()
 * @method JobStatus[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class JobStatusRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, JobStatus::class);
    }
}
