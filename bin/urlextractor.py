#!/usr/bin/python
import sys
import urllib2
import re
from BeautifulSoup import BeautifulSoup

url = str(sys.argv[1])
linktext = str(sys.argv[2])
page = urllib2.urlopen(url).read()
soup = BeautifulSoup(page)
soup.prettify()

for link in soup.findAll('a', href=True):
    if link.find(text=re.compile(linktext)):
        thelink = link['href']
        print(thelink)
        break
