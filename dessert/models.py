from django.db import models

class Dessert(models.Model):
    DESSERT_TYPE = (
        ('Cookies', 'Cookies'),
        ('Cakes', 'Cakes'),
        ('Drinks', 'Drinks'),
        ('Pastry', 'Pastry'),
    )
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100, choices=DESSERT_TYPE)
    ingredients = models.CharField(max_length=10000)
    steps = models.CharField(max_length=10000000)
    img_src = models.CharField(max_length=1000000)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title + ' - ' + self.category
