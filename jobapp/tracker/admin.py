from django.contrib import admin
from .models import jobListing
# Register your models here.
admin.site.register(jobListing)
admin.site.site_header = "Job Application Tracker Admin"
