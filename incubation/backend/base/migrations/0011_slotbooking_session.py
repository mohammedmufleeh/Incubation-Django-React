# Generated by Django 4.0.6 on 2022-07-28 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_alter_application_companylogo'),
    ]

    operations = [
        migrations.AddField(
            model_name='slotbooking',
            name='session',
            field=models.CharField(default=1, max_length=300),
            preserve_default=False,
        ),
    ]
