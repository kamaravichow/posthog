# Generated by Django 3.2.19 on 2024-01-12 13:16

from django.db import migrations


def switch_exception_autocapture_off_for_all(apps, schema_editor):
    Team = apps.get_model("posthog", "Team")
    teams_with_exception_autocapture_on = Team.objects.filter(autocapture_exceptions_opt_in=True)
    teams_with_exception_autocapture_on.update(autocapture_exceptions_opt_in=False)


class Migration(migrations.Migration):
    dependencies = [
        ("posthog", "0384_activity_log_was_impersonated"),
    ]

    operations = [
        migrations.RunPython(switch_exception_autocapture_off_for_all, reverse_code=migrations.RunPython.noop),
    ]
