
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import JobListingForm

from .models import jobListing
@login_required
def user_tracker(request):
    listings = jobListing.objects.filter(user=request.user).order_by('-dateApplied')
    return render(request, 'maintracker.html',{'listings': listings})

@login_required
def addListing(request):
    if request.method == 'POST':
        form = JobListingForm(request.POST)
        if form.is_valid():
            listing = form.save(commit=False)   
            listing.user = request.user          
            listing.save()                       
            return redirect('user-tracker')
    else:
        form = JobListingForm()

    return render(request, 'addListing.html', {'form': form})

@ login_required
def filterListings(request):
    pass