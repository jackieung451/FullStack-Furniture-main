from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost

# class ImageInlineAdmin(admin.InlineModelAdmin):
#     extra = 0
#     model = Image

# class BlogPostAdmin(admin.ModelAdmin):
#     form = BlogAdminForm

class BlogPostAdmin(SummernoteModelAdmin):
    exclude = ('slug', )
    list_display = ('id', 'title', 'category', 'date_created')
    list_display_links = ('id', 'title')
    search_fields = ('title', )
    list_per_page = 25
    summernote_fields = ('content', )

admin.site.register(BlogPost, BlogPostAdmin)
# inlines=[ImageInlineAdmin]
