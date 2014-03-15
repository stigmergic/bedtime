'''
Created on Feb 7, 2014

@author: joshua
'''
from django.views.generic.base import View
from django.template.context import RequestContext
from django.shortcuts import render

class HomeView(View):
    def get(self, request):
        d = {
             }

        context = RequestContext(request, d)
        
        return render(self.request, 'index.html', context)
