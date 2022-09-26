
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Application(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    
        
    ]
    INCUBATIONTYPE_CHOICES = [
        ('Physicalincubation', 'Physicalincubation'),
        ('Virtualincubation', 'Virtualincubation'),
    ]
    name = models.CharField(max_length=50,null=True)
    Address = models.CharField(max_length=100,null=True)
    city = models.CharField(max_length=10)
    state = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10)
    companyname = models.CharField(max_length=20)
    # companylogo = models.ImageField(upload_to="img")
    describtion_on_team = models.TextField(max_length=100,blank=True)
    describtion_on_company = models.TextField(max_length=100,blank=True)
    describtion_on_products = models.TextField(max_length=100,blank=True)
    describe_problem = models.TextField(max_length=100,blank=True)
    unique_about_solution = models.TextField(max_length=100,blank=True)
    value_proportion_for_customer = models.TextField(max_length=100,blank=True)
    advantage_competative = models.TextField(max_length=100,blank=True)
    revenue_model = models.TextField(max_length=100,blank=True)
    market_product_size = models.TextField(max_length=100,blank=True)
    how_market = models.TextField(max_length=100,blank=True)
    incubation_type = models.CharField(choices=INCUBATIONTYPE_CHOICES,max_length=300,blank=True)
    status = models.CharField(default='Pending',choices=STATUS_CHOICES,max_length=300,blank=True)
    status_note = models.CharField(max_length=300,null=True, blank=True)
    slotactive = models.BooleanField(default=False)
    
    def __str__(self):
        return self.companyname


class Slotbooking(models.Model):
    SESSION_CHOICES = [
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
        ('D', 'D'),
        ('E', 'E'),
        ('F', 'F'),
        ('G', 'G'),
    ]
    company = models.ForeignKey(Application, on_delete=models.CASCADE,null=True, blank=True, )
    date = models.CharField(max_length=10)
    time = models.CharField(max_length=10)
    slotnumber = models.CharField(max_length=10)
    session = models.CharField(max_length=100,choices=SESSION_CHOICES)
    Active = models.BooleanField(default=False)

    def __str__(self):
        return self.slotnumber