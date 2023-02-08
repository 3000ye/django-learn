from django.shortcuts import render


def index(request):
    return render(request, "multi-ends/web.html")
