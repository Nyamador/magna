# Generated by Django 2.2.7 on 2020-01-31 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0005_auto_20200131_2200'),
    ]

    operations = [
        migrations.AddField(
            model_name='organizer',
            name='account_number',
            field=models.CharField(default=1, max_length=20, verbose_name='Account Number'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='organizer',
            name='bank_name',
            field=models.CharField(default=1, max_length=200, verbose_name='Bank Name'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='organizer',
            name='country',
            field=models.CharField(default=12312, max_length=10, verbose_name='Country'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='organizer',
            name='momo_1',
            field=models.CharField(blank=True, max_length=12, null=True, verbose_name='Main Mobile Money Number'),
        ),
        migrations.AddField(
            model_name='organizer',
            name='momo_2',
            field=models.CharField(blank=True, max_length=12, null=True, verbose_name='Alternate Mobile Money Number'),
        ),
    ]
