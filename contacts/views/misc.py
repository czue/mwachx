#Django Imports
from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST
from django.conf import settings
from django.http import HttpResponseBadRequest, HttpResponse
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required

from constance import config

#Python Imports
import datetime,collections,sys

#Local Imports
import contacts.models as cont
import contacts.forms, utils

    
@staff_member_required
def staff_facility_change(request,facility_id):
    facility = cont.Facility.objects.get(pk=facility_id)
    request.user.practitioner.facility = facility
    request.user.practitioner.save()
    return HttpResponse('/') #redirect URL
    
@login_required()
def change_current_date(request,direction,delta):
    
    delta = int(delta) * (-1 if direction == 'back' else 1)
    td = datetime.timedelta(days=delta)
    config.CURRENT_DATE = utils.today() + td
    return HttpResponse('/') #redirect URL
    
