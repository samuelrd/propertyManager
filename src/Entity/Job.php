<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\JobRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: JobRepository::class)]
#[ApiResource]
class Job
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 150)]
    private $summary;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $description;

    #[ORM\ManyToOne(targetEntity: Property::class, inversedBy: 'jobs')]
    #[ORM\JoinColumn(nullable: false)]
    private $property;

    #[ORM\ManyToOne(targetEntity: JobStatus::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $status;

    public function __construct()
    {
        $this->status = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSummary(): ?string
    {
        return $this->summary;
    }

    public function setSummary(string $summary): self
    {
        $this->summary = $summary;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getProperty(): ?Property
    {
        return $this->property;
    }

    public function setProperty(?Property $property): self
    {
        $this->property = $property;

        return $this;
    }

    public function getPropertyName(): string
    {
        return $this->property->getName();
    }

    public function getPropertyId(): string
    {
        return $this->property->getId();
    }

    public function getStatus(): ?JobStatus
    {
        return $this->status;
    }

    public function setStatus(?JobStatus $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getStatusName(): string
    {
        return $this->status->getName();
    }

    public function getStatusId(): string
    {
        return $this->status->getId();
    }


}
