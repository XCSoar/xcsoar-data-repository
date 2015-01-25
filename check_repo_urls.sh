#!/bin/sh

CMDS="wget mktemp grep" 
 
for EACH in ${CMDS}
do
	which $EACH > /dev/null
    	if [ ! "${?}" -eq "0" ]; then
      	  echo "ERROR: The '${EACH}' command is not available or not in path."
          exit 1 
    	fi
done

if [ -z "$1" ]; then
	echo "Please add repository file as argument"
	echo "${0} <repositoryfile>"
	exit 1 
fi

TMPDIR=`mktemp -d XXXXXXCSOAR` 

grep uri "${1}" | cut -f2 -d= > ${TMPDIR}/url_list.txt

while read line 
  do 
    wget -q --spider ${line}
    if [ ! "${?}" -eq "0" ]; then
      echo "ERROR: ${line} is not available"
    fi
done < ${TMPDIR}/url_list.txt  

# Cleanup
rm -rf ${TMPDIR}
