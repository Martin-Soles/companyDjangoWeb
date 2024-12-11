from django.http import HttpResponse
from django.template import loader
from .models import Image
def main(request):
  images = Image.objects.all().values()
  template = loader.get_template('index.html')
  context = {
    'images': images,
  }
  return HttpResponse(template.render(context, request))