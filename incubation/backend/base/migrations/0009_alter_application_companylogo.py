# Generated by Django 4.0.6 on 2022-07-28 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_application_companylogo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='companylogo',
            field=models.ImageField(default=1, upload_to=''),
            preserve_default=False,
        ),
    ]