from datetime import datetime
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.text import slugify



class Organizer(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Organizer Name", max_length=255)
    logo = models.ImageField(upload_to="organizer/%Y/%m/%d/", max_length=100, default="profilep.jpg")
    website = models.URLField(verbose_name="Website Url", max_length=255, null=True, blank=True)
    facebook = models.URLField(verbose_name="Facebook Url", max_length=255, null=True, blank=True)
    twitter = models.URLField(verbose_name="Twitter Url", max_length=255, null=True, blank=True)
    instagram = models.URLField(verbose_name="Instagram  Url", max_length=255, null=True, blank=True)
    linkedin = models.URLField(verbose_name="LinkedIn Url", max_length=255, null=True, blank=True)
    momo_1 = models.CharField(verbose_name="Main Mobile Money Number", max_length=12, null=True, blank=True)
    momo_2 = models.CharField(verbose_name="Alternate Mobile Money Number", max_length=12, null=True, blank=True)
    bank_name = models.CharField(verbose_name="Bank Name", max_length=200)
    account_number = models.CharField(verbose_name="Account Number", max_length=20)
    country = models.CharField(verbose_name="Country", max_length=10)

    def __str__(self):
        return self.name


class Event(models.Model):
    category_list = (
        ('ABA', 'Auto, Boat & Air'),
        ('BP', 'Business & Professional'),
        ('CC', 'Charity & Causes'),
        ('CoC', 'Community & Culture'),
        ('FE', 'Family & Education'),
        ('FB', 'Fashion & Beauty'),
        ('FME', 'Film , Media & Entertainment'),
        ('FD', 'Food & Drink'),
        ('GP', 'Government & Politics'),
        ('HW', 'Health & Wellness'),
        ('HSI', 'Hobbies & Special Interest'),
        ('HL', 'Home & Lifestyle'),
        ('M', 'Music'),
        ('PVA', 'Performing & Visual Arts'),
        ('RS', 'Religion & Spirituality'),
        ('SA', 'School Activities'),
        ('ST', 'Science & Technology'),
        ('SH', 'Seasonal & Holiday'),
        ('SF', 'Sports & Fitness'),
        ('TO', 'Travel & Outdoor'),
        ('Other', 'Other'),
    )

    time_list = (
        ('12:00 AM', '12:00 AM'),
        ('12:15 AM', '12:15 AM'),
        ('12:30 AM', '12:30 AM'),
        ('12:45 AM', '12:45 AM'),
        ('1:00 AM', '1:00 AM'),
        ('1:15 AM', '1:15 AM'),
        ('1:30 AM', '1:30 AM'),
        ('1:45 AM', '1:45 AM'),
        ('2:00 AM', '2:00 AM'),
        ('2:15 AM', '2:15 AM'),
        ('2:30 AM', '2:30 AM'),
        ('2:45 AM', '2:45 AM'),
        ('3:00 AM', '3:00 AM'),
        ('3:15 AM', '3:15 AM'),
        ('3:30 AM', '3:30 AM'),
        ('3:45 AM', '3:45 AM'),
        ('4:00 AM', '4:00 AM'),
        ('4:15 AM', '4:15 AM'),
        ('4:30 AM', '4:30 AM'),
        ('4:45 AM', '4:45 AM'),
        ('5:00 AM', '5:00 AM'),
        ('5:15 AM', '5:15 AM'),
        ('5:30 AM', '5:30 AM'),
        ('5:45 AM', '5:45 AM'),
        ('6:00 AM', '6:00 AM'),
        ('6:15 AM', '6:15 AM'),
        ('6:30 AM', '6:30 AM'),
        ('6:45 AM', '6:45 AM'),
        ('7:00 AM', '7:00 AM'),
        ('7:15 AM', '7:15 AM'),
        ('7:30 AM', '7:30 AM'),
        ('7:45 AM', '7:45 AM'),
        ('8:00 AM', '8:00 AM'),
        ('8:15 AM', '8:15 AM'),
        ('8:30 AM', '8:30 AM'),
        ('8:45 AM', '8:45 AM'),
        ('9:00 AM', '9:00 AM'),
        ('9:15 AM', '9:15 AM'),
        ('9:30 AM', '9:30 AM'),
        ('9:45 AM', '9:45 AM'),
        ('10:00 AM', '10:00 AM'),
        ('10:15 AM', '10:15 AM'),
        ('10:30 AM', '10:30 AM'),
        ('10:45 AM', '10:45 AM'),
        ('11:00 AM', '11:00 AM'),
        ('11:15 AM', '11:15 AM'),
        ('11:30 AM', '11:30 AM'),
        ('11:45 AM', '11:45 AM'),
        ('12:00 PM', '12:00 PM'),
        ('12:15 PM', '12:15 PM'),
        ('12:30 PM', '12:30 PM'),
        ('12:45 PM', '12:45 PM'),
        ('1:00 PM', '1:00 PM'),
        ('1:15 PM', '1:15 PM'),
        ('1:30 PM', '1:30 PM'),
        ('1:45 PM', '1:45 PM'),
        ('2:00 PM', '2:00 PM'),
        ('2:15 PM', '2:15 PM'),
        ('2:30 PM', '2:30 PM'),
        ('2:45 PM', '2:45 PM'),
        ('3:00 PM', '3:00 PM'),
        ('3:15 PM', '3:15 PM'),
        ('3:30 PM', '3:30 PM'),
        ('3:45 PM', '3:45 PM'),
        ('4:00 PM', '4:00 PM'),
        ('4:15 PM', '4:15 PM'),
        ('4:30 PM', '4:30 PM'),
        ('4:45 PM', '4:45 PM'),
        ('5:00 PM', '5:00 PM'),
        ('5:15 PM', '5:15 PM'),
        ('5:30 PM', '5:30 PM'),
        ('5:45 PM', '5:45 PM'),
        ('6:00 PM', '6:00 PM'),
        ('6:15 PM', '6:15 PM'),
        ('6:30 PM', '6:30 PM'),
        ('6:45 PM', '6:45 PM'),
        ('7:00 PM', '7:00 PM'),
        ('7:15 PM', '7:15 PM'),
        ('7:30 PM', '7:30 PM'),
        ('7:45 PM', '7:45 PM'),
        ('8:00 PM', '8:00 PM'),
        ('8:15 PM', '8:15 PM'),
        ('8:30 PM', '8:30 PM'),
        ('8:45 PM', '8:45 PM'),
        ('9:00 PM', '9:00 PM'),
        ('9:15 PM', '9:15 PM'),
        ('9:30 PM', '9:30 PM'),
        ('9:45 PM', '9:45 PM'),
        ('10:00 PM', '10:00 PM'),
        ('10:15 PM', '10:15 PM'),
        ('10:30 PM', '10:30 PM'),
        ('10:45 PM', '10:45 PM'),
        ('11:00 PM', '11:00 PM'),
        ('11:15 PM', '11:15 PM'),
        ('11:30 PM', '11:30 PM'),
        ('11:45 PM', '11:45 PM'),
    )

    payout_choices = (
        ('MTN', 'MTN Mobile Money'),
        ('Bank', 'Bank Deposit'),
        ('Voda', 'Vodafone Cash'),
    )
    slug = models.SlugField(verbose_name="Slug", max_length=100, unique=True, blank=True, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.CharField(verbose_name="Event Category", choices=category_list, max_length=10)
    name = models.CharField(verbose_name="Event Name", max_length=255)
    organizer = models.ForeignKey(Organizer, on_delete=models.CASCADE)
    description = models.CharField(verbose_name="Event Description", max_length=50000, blank=True, null=True)
    venue = models.CharField(verbose_name="Venue", max_length=255)
    start_date = models.DateField(verbose_name="Event Start Date")
    start_time = models.CharField(verbose_name="Start Time", max_length=10, choices=time_list)
    end_date = models.DateField(verbose_name="Event End Date")
    end_time = models.CharField(verbose_name="End Time", max_length=10, choices=time_list)
    # time_zone = models.CharField(verbose_name="Event Timezone", max_length=255)
    image = models.ImageField(upload_to="event/%Y/%m/%d/", max_length=100, default="original.jpg")
    payout = models.CharField(verbose_name="Event Payout Method", choices=payout_choices, max_length=10, null=True, blank=True)
    is_active = models.BooleanField(verbose_name="Active Event", default=False)
    is_hidden = models.BooleanField(verbose_name="Hidden Event", default=False)
    has_order = models.BooleanField(verbose_name="Hidden Event", default=False)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('event-detail', args=[self.slug])

    def send_event_creation_email(self):
        pass

    def get_start_date(self):
        """
        Returns a readable date format
        """
        return f'{self.start_date:%B %d, %Y}'

    def get_end_date(self):
        """
        Returns a readable date format
        """
        return f'{self.end_date:%B %d, %Y}'

    def save(self, *args, **kwargs):
        """
        Auto populating the SlugField with the slug friendly version of the product name
        """
        self.slug = slugify(self.name)
        super(Event, self).save(*args, **kwargs)


class Ticket(models.Model):
    ticket_type = (
        ('p', 'Paid'),
        ('f', 'Free'),
    )

    visibility_list = (
        ('v', 'visible'),
        ('h', 'hidden'),
    )

    sales_channel = (
        ('Online only', 'Online only'),
        ('At the door', 'At the door only'),
        ('Everywhere', 'Everywhere'),
    )
    kind = models.CharField(verbose_name="Ticket Type", choices=ticket_type, max_length=1)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Ticket Name", max_length=50)
    quantity = models.PositiveIntegerField(verbose_name="Quantity")
    price = models.DecimalField(verbose_name="Ticket Price", decimal_places=2, max_digits=10)
    description = models.CharField(verbose_name="Ticket Description", max_length=2500, null=True, blank=True)
    # Ticket per order
    sales_channel = models.CharField(verbose_name="Ticket Sales Channel", choices=sales_channel, max_length=50,
                                     null=True, blank=True)

    def __str__(self):
        return f'{self.name} : {self.event}'


class GuestList(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Guest List Name", max_length=100)

    def __str__(self):
        return self.name


class Guest(models.Model):
    first_name = models.CharField(verbose_name="First Name", max_length=50)
    last_name = models.CharField(verbose_name="Last Name", max_length=50)
    email = models.EmailField(verbose_name="Guest Email Addrress", max_length=100, null=True, blank=True)
    guest_list = models.ForeignKey(GuestList, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class GuestTicket(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(verbose_name="Ticket Count", default=1)
    guest = models.ForeignKey(Guest, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.guest} : {self.ticket}'


#Create an order for attendee
# Reduce Ticket Count
# 

# class Order(models.Model):
#     event = models.ForeignKey(Event, on_delete=models.CASCADE)

#     def __str__(self):
#         return f'Order #{self.id} : {self.event}'


# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE)
#     ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)

#     def __str__(self):
#         return f'{self.ticket:}'
    