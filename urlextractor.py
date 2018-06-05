#!/usr/bin/python
import sys
import urllib2
import re
from pprint import pprint 
from BeautifulSoup import BeautifulSoup

url = str(sys.argv[1])
page = urllib2.urlopen(url).read()
soup = BeautifulSoup(page)
soup.prettify()

for link in soup.findAll('a'):
    if link.find(text=re.compile("OpenAir format")):
        thelink = link
        
        print(thelink)
        break
