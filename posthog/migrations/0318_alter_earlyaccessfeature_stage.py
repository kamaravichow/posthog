# Generated by Django 3.2.18 on 2023-06-02 14:28

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("posthog", "0317_batch_export_models"),
    ]

    operations = [
        migrations.AlterField(
            model_name="earlyaccessfeature",
            name="stage",
            field=models.CharField(
                choices=[
                    ("draft", "draft"),
                    ("concept", "concept"),
                    ("alpha", "alpha"),
                    ("beta", "beta"),
                    ("general-availability", "general availability"),
                ],
                max_length=40,
            ),
        ),
    ]
