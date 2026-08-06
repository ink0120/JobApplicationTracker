from django import forms
from .models import jobListing

class JobListingForm(forms.ModelForm):
    class Meta:
        model = jobListing
        fields = [
            'companyName',
            'jobTitle',
            'salary',
            'dateApplied',
            'status',
            'companyContact',
        ]
