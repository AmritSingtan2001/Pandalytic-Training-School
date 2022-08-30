# Generated by Django 4.0.5 on 2022-08-22 06:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student_info',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=150, unique=True)),
                ('phone_number', models.IntegerField()),
                ('locations', models.CharField(max_length=100)),
                ('course', models.CharField(max_length=100)),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
    ]
