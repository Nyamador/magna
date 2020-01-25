import algoliasearch_django as algoliasearch
from algoliasearch_django import AlgoliaIndex
from .models import Event

# algoliasearch.register(Event)

@register(Event)
class EventIndex(AlgoliaIndex):
    fields = ['','']
    settings = {'': ['']}
    index_name = 'events_index'