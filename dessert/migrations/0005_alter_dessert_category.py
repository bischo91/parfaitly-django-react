# Generated by Django 3.2.6 on 2021-10-26 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dessert', '0004_rename_image_src_dessert_img_src'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dessert',
            name='category',
            field=models.CharField(choices=[('Cookies', 'Cookies'), ('Cakes', 'Cakes'), ('Drinks', 'Drinks'), ('Pastry', 'Pastry'), ('Test', 'Test')], max_length=100),
        ),
    ]