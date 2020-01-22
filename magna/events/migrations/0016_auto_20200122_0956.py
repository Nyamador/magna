# Generated by Django 2.2.7 on 2020-01-22 09:56

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0015_auto_20200122_0956'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_id',
            field=models.UUIDField(default=uuid.UUID('9e570fd2-a3c7-4a32-85e2-a6afc0bc124d'), editable=False, unique=True, verbose_name='Event Id'),
        ),
    ]
