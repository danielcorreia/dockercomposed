import json

from django.http import HttpResponse


def health(request):
    data = {'name': 'api', 'version': {'current': 1}, 'statusOk': True}
    return HttpResponse(
        json.dumps(data),
        content_type='application/json'
    )


def api(request):
    data = {'name': 'Daniel'}
    return HttpResponse(
        json.dumps(data),
        content_type='application/json'
    )
