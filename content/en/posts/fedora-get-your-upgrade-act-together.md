---
slug: fedora-get-your-upgrade-act-together
date: 2012-11-11T01:48:13
title: "Fedora - Get your upgrade act together"
tags:  
- floss
- Fedora
- yum
summary: >
    Fedora's upgrades are usually a FAIL for me, they should give it a priority
    if they want testers.
---

I mostly like [Fedora](http://fedoraproject.org/), it's close enough to a
rolling release distro, while maintaining some stability.

It's main Achilles heel IMO is the upgrade policy, lack of it - Looks like
they've never given it enough consideration.

Preupgrade had broken things on previous upgrades. Now, wanting to try Fedora
18 Alpha, preupgrade is deprecated, to be replaced by another tool (fedup),
which is not ready, and probably will be buggy for the first iterations.

The Released Alpha 18 images
[have no upgrade functionality](http://fedoraproject.org/wiki/Common_F18_bugs#No_upgrade_function_available_from_Fedora_17_to_Fedora_18_Alpha),
and the recommended way of upgrading is
[using yum](http://fedoraproject.org/wiki/Upgrading_Fedora_using_yum#Fedora_17_-.3E_Fedora_18).
Problem ? Broken dependencies for several days (when I've attempted to
upgrade), not for some 3rd party repository package, but gnome's desktop basic
one - Network Manager's bluetooth component or one of it's dependencies.

You want testers for your releases ? Give priority to upgrades. I'm an early
adopter, but won't do a clean install of my complex setup each time an upgrade
is due.

No wonder I'm usually leaving Fedora for other distros during upgrade phase.
