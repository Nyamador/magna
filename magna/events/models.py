from django.conf import settings
from django.db import models


class Organizer(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Organizer Name", max_length=255)
    logo = models.ImageField(upload_to="organizer/%Y/%m/%d/", max_length=100, default="profilep.jpg")
    description = models.CharField(verbose_name="Organizer Description", max_length=255)
    website = models.URLField(verbose_name="Website Url", max_length=255, null=True, blank=True)
    facebook = models.URLField(verbose_name="Facebook Url", max_length=255, null=True, blank=True)
    twitter = models.URLField(verbose_name="Twitter Url", max_length=255, null=True, blank=True)
    instagram = models.URLField(verbose_name="Instagram  Url", max_length=255, null=True, blank=True)
    linkedin = models.URLField(verbose_name="LinkedIn Url", max_length=255, null=True, blank=True)


    def __str__(self):
        return self.name


class Event(models.Model):
    category_list = (
        ('ABA', 'Auto, Boat & Air'),
        ('BP',  'Business & Professional'),
        ('CC',  'Charity & Causes'),
        ('CoC', 'Community & Culture'),
        ('FE',  'Family & Education'),
        ('FB',  'Fashion & Beauty'),
        ('FME', 'Film , Media & Entertainment'),
        ('FD',  'Food & Drink'),
        ('GP',  'Government & Politics'),
        ('HW',  'Health & Wellness'),
        ('HSI', 'Hobbies & Special Interest'),
        ('HL',  'Home & Lifestyle'),
        ('M',   'Music'),
        ('PVA', 'Performing & Visual Arts'),
        ('RS',  'Religion & Spirituality'),
        ('SA',  'School Activities'),
        ('ST',  'Science & Technology'),
        ('SH',  'Seasonal & Holiday'),
        ('SF',  'Sports & Fitness'),
        ('TO',  'Travel & Outdoor'),
        ('Other','Other'),
    )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.CharField(verbose_name="Event Category", choices=category_list, max_length=10)
    name = models.CharField(verbose_name="Event Name", max_length=255)
    organizer = models.ForeignKey(Organizer, on_delete=models.CASCADE)
    description = models.CharField(verbose_name="Event Description", max_length=255)
    venue = models.CharField(verbose_name="Venue", max_length=255)
    start_date = models.DateField(verbose_name="Event Start Date", auto_now_add=True)
    start_time = models.CharField(verbose_name="Start Time", max_length=10)
    end_date = models.DateField(verbose_name="Event End Date", auto_now_add=True)
    end_time = models.CharField(verbose_name="End Time", max_length=10)
    time_zone = models.CharField(verbose_name="Event Timezone", max_length=255)
    image = models.ImageField(upload_to="event/%Y/%m/%d/", max_length=100, default="profilep.jpg")

    def __str__(self):
        return self.name


class Ticket(models.Model):
    ticket_type = (
        ('p','Paid'),
        ('f', 'Free'),
    )

    visibility_list = (
        ('v', 'visible'),
        ('h', 'hidden'),
    )

    sales_channel = (
        ('on', 'Online only'),
        ('door', 'At the door only'),
        ('both', 'Everywhere'),
    )
    kind = models.CharField(verbose_name="Event Type", choices=ticket_type, max_length=1)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Ticket Name", max_length=50)
    quantity = models.CharField(verbose_name="Quantity", max_length=30)
    price = models.DecimalField(verbose_name="Ticket Price", decimal_places=2, max_digits=10)
    sale_start_date = models.DateField(verbose_name="Event Start Date", auto_now_add=True)
    sale_start_time = models.CharField(verbose_name="Start Time", max_length=10,null=True, blank=True)
    sale_end_date = models.DateField(verbose_name="Event End Date", auto_now_add=True)
    sale_end_time = models.CharField(verbose_name="End Time", max_length=10,null=True, blank=True)
    description = models.CharField(verbose_name="Event Description", max_length=2500,null=True, blank=True)
    visibility = models.CharField(verbose_name="Event Type", choices=visibility_list, max_length=1,null=True, blank=True)
    #Ticket per order
    minimum_ticket_order = models.PositiveSmallIntegerField(verbose_name="Minimum Order", default="1")
    maximum_ticket_order = models.PositiveIntegerField(verbose_name="Maximum Order", null=False, blank=False)
    sales_channel = models.CharField(verbose_name="Ticket Sales Channel",choices=sales_channel, max_length=5,null=True, blank=True)


    def __str__(self):
        return self.name

# class GuestList(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     event = models.ForeignKey(Event, on_delete=models.CASCADE)
#     name = models.CharField(verbose_name="Guest List Name", max_length=100)

#     def __str__(self):
#         return self.name


# class Guest(models.Model):
#     first_name = models.CharField(verbose_name="First Name", max_length=100)
#     last_name = models.CharField(verbose_name="Last Name", max_length=100)
#     email = models.EmailField(verbose_name="Guest Email Addrress", max_length=100, null=True , blank=True)
#     # ticket count 