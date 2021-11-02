# Generated by Django 3.2.6 on 2021-11-02 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dessert', '0005_alter_dessert_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dessert',
            name='category',
            field=models.CharField(choices=[('Cookie', 'Cookie'), ('Cake', 'Cake'), ('Drink', 'Drink'), ('Pastry', 'Pastry'), ('Bread', 'Bread')], max_length=100),
        ),
    ]
