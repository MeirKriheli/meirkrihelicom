---
slug: fine-line-between-overconfidence-and-stupidity
date: 2013-07-20T19:32:48
title: Fine line between overconfidence and stupidity
tags: 
- sysadmin
- Ubuntu
- whatsup
- FLOSS
summary: >
    [Whatsup.org.il](https://whatsup.org.il) was served by Ubuntu 6.06 for a very long time. Had hard
    time getting to the hosting location, but upgrade was long over due.
---
[Whatsup.org.il](http://whatsup.org.il) was served by Ubuntu 6.06 for a
very long time, it was a [LTS](https://wiki.ubuntu.com/LTS) release, but
it's 5 year support expired long time ago, and Ubuntu had several LTS
releases since.

When upgrading servers, it's best to have physical access to the machine
in case something goes wrong (and many things can, and will) and the
machine won't boot. However we had hard time getting to Bezeq
Internationals' hosting farm.

In addition, when a server is behind so many releases, sometimes it's
best to backup everything and reinstall from scratch. But that would
mandate physical access as well.

After dragging our feet for a long time, I had enough. In what to could
be described as overconfidence or stupidity, I've decided to do in place
release upgrades over an ssh connection from 6.06 to the next LTS up to
the latest, 12.04.

It's taken several weeks, with long pauses between each release upgrade.

Unfortunately it wasn't a smooth ride. do-release-upgrade in 6.06 was
broken, and in addition that release was moved from the normal servers
to [old-releases](http://old-releases.ubuntu.com/ubuntu/), so
do-release-update couldn't find the needed data.

Those required manual intervention: adding sleep to the script and while
it's waiting, do some manual editing to fix the problems and allow it to
continue (much like the process described at question
[#62184](https://answers.launchpad.net/ubuntu/+source/update-manager/+question/62184),
regardless of different versions).

During one release upgrade, I've managed during the main PG cluster
update to drop the main PostgreSQL cluster (which used as the db for
some other sites hosted on that server, like
[debian.org.il](http://debian.org.il)), but that was restored from the
backups (yeah, we have those too, thanks Yehuda).

After the upgrade to the 12.04, lighttpd stop working, an easy fix was
found in bug
[#1067315](https://bugs.launchpad.net/ubuntu/+source/lighttpd/+bug/1067315)
(why wasn't it fixed? Looks like an easy picking).

The upgrade from PHP4 to PHP5 had it's own casualties in the crappy old
PostNuke (like the Wiki), and some code fixes had to be applied
manually.

After several virtual heart attacks the server is on 12.04 release, and
things are in working order. Would I do it again? Not sure, however
necessity is the mother of invention ;-)
