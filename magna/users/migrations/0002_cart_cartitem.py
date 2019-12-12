# Generated by Django 2.2.7 on 2019-12-10 18:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20191210_1829'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Cartitem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1, max_length=20, verbose_name='Ticket')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.Cart')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.Ticket')),
            ],
        ),
    ]
