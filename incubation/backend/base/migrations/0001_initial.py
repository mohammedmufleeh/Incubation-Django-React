# Generated by Django 4.0.6 on 2022-07-16 17:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('Address', models.CharField(max_length=100, null=True)),
                ('city', models.CharField(max_length=10)),
                ('state', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone', models.CharField(max_length=10)),
                ('companyname', models.CharField(max_length=20)),
                ('companylogo', models.ImageField(default=None, max_length=20, null=True, upload_to='')),
                ('describtion_on_team', models.TextField(max_length=100)),
                ('describtion_on_company', models.TextField(max_length=100)),
                ('unique_about_solution', models.TextField(max_length=100)),
                ('value_proportion_for_customer', models.TextField(max_length=100)),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Rejected', 'Rejected')], default='Pending', max_length=300, null=True)),
                ('status_note', models.CharField(blank=True, max_length=300, null=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
