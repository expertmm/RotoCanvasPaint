# RotoCanvas
For now this repository serves as a collection of terminal commands for
manipulating videos and DVDs, but if you can get the code working, let
me know. I'll change this message if I make more progress. See [FFmpeg
Notes](#FFmpeg Notes) below, and the "more" directory. Upstream ideas
and code from "more" directory that are implemented will be moved to
"references". Please read "Purpose" and "Why aren't there more
rotoscoping applications?" below before commenting on the code or
submitting pull requests.


## Purpose
This is a manual rotoscoping (frame by frame painting) application.
Rotoscoping is the only accurate way to achieve effects such as manual
object removal (such as removing wires for flying scenes), cartoons
mixed with live action, correction of layer order errors (such as if the
wrong fingers get in the way of a virtual object that is held), doing
energy effects without 3D mockups of characters (3D mockups [invisible
blockers] are normally needed in order to address situations where part
or all of the energy effect goes behind a character or some of the
character's fingers), or detailed junk matte tweaking (such as is needed
when all or part of an actor appears in front of a studio wall instead
of a green screen). Before the digital age, these issues were addressed
by hand, and rotoscoping was considered an essential part of post
effects to address a whole domain of issues. The fact that there are so
few applications like this has become an obstacle. Ideally this project
will be used as a basis to create plugins (see Developer Notes) so that
more video editing applications will include rotoscoping, in this case
**nondestructive** rotoscoping. RotoCanvas is being tested and compiled
in a standalone application ("RotoCanvas Paint") so that the software
can be used right away.

### Why aren't there more rotoscoping applications?
Possibly, rotoscoping applications are not considered commercially
viable since there is unavoidable lag situations that can't be
reasonably blamed on developers but inevitably are (see "Caveats"
below). Unavoidable lag and video format complexity issues could be
reasons for the discontinuation of such programs as Ulead &reg;
VideoPaint &#174; (this project is not affiliated with Corel &reg; or
Ulead &reg;). Another reason could be that rotoscoping is highly
dependent on the source frame remaining the same, whereas MPEG (variants
of which are used almost everywhere) has inherently inexact frame
seeking. These issues may be partially or completely resolved by
advanced caching (for the lag issue) and advanced frame seeking
algorithms (for the accuracy issue), either of which are not easily
achieved but both of which are needed in a professional video
application (since video, which has slow seeking would be required,
and MPEG, which is normally inaccurate would be required). Even if image
sequences are used to resolve the seek lag and seek accuracy issues,
seek lag normally remains simply because the edits have to be re-applied
or re-loaded (basically, a multi-layer image project needs to be loaded
each time seeking to a different frame). Leaving rotoscoping out
entirely is often seen as the only way to avoid these issues. This
program aims to implement rotoscoping regardless of the possibility of
seek lag or requiring image sequences (to avoid seek accuracy issues).
In this project, rotoscoping (the core feature) is considered to be an
indispensable part of video editing, regardless of the fact that meeting
the expectations of normal consumers (primarily expectations for speed
and format support) may be impractical to be achieved by volunteer
programmers, or may be impossible for technical reasons described above.


## Caveats
* Lag during frame loading cannot be avoided, since each video frame
must be loaded at full quality, which at 1080p takes up an unavoidable
8100kb per layer. Maximum performance could be achieved when one or more
frames in either direction of the current frame are cached, in their
edited form. However, upon editing, the cache will have to be updated
and the image, redrawn. To prevent further lag in that situation, the
source frame (base layer) could be cached so that editing layers can be
applied without reloading the frame from the source video file.
* At this time, image sequences are required. MPEG-derived formats may
or may not ever be added, since MPEG-style frame seeking is inexact and
rotoscoping is highly dependent on the source frame remaining the same.


## Known Issues
* Complete the first working version.
* Audit & test `getLayerImagePathMostRecent`.


## Planned Features
* [ ] Add markers to media OR timeline, separately (media markers are
  also on timeline behave differently: ghosted until media is selected,
  has filmstrip icon if from a clip; reversed if video is reversed,
  changed placement if speed is changed, etc).
* [ ] Use alpha.png for reducing opacity of parts of background layer.
* [ ] Allow a blocker layer type (make an animated object that seems to
  "undo" previous edits, such as to reveal parts of characters under
  the effect, without permanently erasing any part of the effect).
* [ ] Use the layer cache (purpose for unused variable cacheMaxMB).
* [ ] Keyboard controls for fast operation:
  * Ctrl Scrollwheel: zoom
  * Shift Alt Scrollwheel: brush hardness
  * Shift Scrollwheel: brush size
* [ ] Add exception handling in appropriate situations.
* [ ] Motion Estimation
  * True ME (intra-frame): Get MSU ME (and other virtualdub plugins) working for
    multiple motion vectors ([not free for commercial
    use](https://www.compression.ru/video/motion_estimation/index_en.html))
  * Overall image motion: Create or use an existing [Phase
    correlation](https://en.wikipedia.org/wiki/Phase_correlation) filter
    for whole-image motion at least.
```
catch(std::exception& e) {
      qCritical() << "Exception thrown:" << e.what();
    }
```
* [ ] Change Speed
  - [ ] optional frame blending to create "in-between"
    frames if slower than original
    - [ ] use motion estimation to warp
  - [ ] optional merged frames for faster than original
    - [ ] use motion estimation for motion blur (so the effect isn't
      simply ghosting)

### Low-priority Planned Features
* [ ] Add a test system that builds ImageSequenceExamples from the blend
  file if Blender is installed on the system. For now, render manually
  (to /home/owner/Videos/ImageSequenceExamples on Poikilos' computer).
* [ ] Effects (see <http://randombio.com/linuxsetup141.html>)
* [ ] Load VirtualDub plugins, possibly as cscript using their
  sourcecode.
* [ ] Detect Light Sabers
  * auto masking behind objects
  * auto sound generation!
  * auto strike/collide generation
    * volume based on speed
    * hits with volume based on speed
      * different saber to saber & saber to target sound
        * as long as they're touching (fades into low electrical sound
    after initial hit)
      * allow manually adding saber-to-target hits
  * Set in-out points for saber
    * generate in-out sounds
* [ ] use G'MIC library for image processing (so GIMP plugins can be
  used).
  * example: Flowblade uses G'MIC, so does EKD (see http://gmic.eu/)
  * use GIMP HQRESIZE plugin (esp for resizing letterbox movies to 16:9
    anamorphic, esp DVD low-res mode mpegs created by Panasonic DVDR EP
    mode)
* [ ] Manipulate flv directly to avoid recompression (example: Try to
  rerender and combine zelda fan film from youtube, using curves from
  Sony Vegas [see vf project file])
* [ ] Have an expandable palette of sound effects, and a depth settings
  (negative for behind camera), then allow clicking to add 3D placement
  of sound
  * also allow animation
  * eventually create Blender export of speaker objects
  * allow optional facing direction (default is track viewer [always
    face camera])
* [ ] Seam Carving resize (possibly via an existing G'MIC plugin)
  example: [SeaMonster - Content-aware resizing FOSS (Seam
  Carving)](http://blogs.msdn.com/b/mswanson/archive/2007/10/23/seamonster-a-net-based-seam-carving-implementation.aspx)
* [ ] PAL-NTSC conversion (universal size/framerate converter) idea
  (or make VirtualDub plugin for this that writes output manually)
  * Make it universal: from any size/framerate to any size/framerate
  * Blend frames retroactively once there is enough data per frame (or
    do multiple at once if there is more data, if destination frame rate
    is higher than source)
  * Scale video as needed (is VirtualDub native scaling accessible via
    SDK??)
  * dump the frames into ffmpeg successively
  * test it with a PAL movie


## Low-priority Known Issues
* drawLineTo (this is used for painting) should draw line instead of
  last point


## Design Directives
* Completely customizable but good defaults for example there are three
  built-in views and can show any 2d or 1d parameter can be shown in any
  you at any time. For example you can make a difference node, and show
  the grey scale difference mask in any view. When you hover the mouse
  over a view, it shows the favorite inputs. When a node is created that
  has 1D or 2D output, favorite is automatically created. You can have
  infinite number of input or result nodes.
* Have "Save Project" and "Save Movie".  If you exit without saving
  movie since modifying project, it gives a warning.  If you save a
  project, the dialog says how big of a flash drive you need (& lists
  which drives will work) by checkbox for "Include source files
  (required for using file on another computer, and also if files were
  opened directly from device such as camera or removable data storage)"


## Developer Notes
The RotoCanvas class is modular, with hopes that it can be used by
various video editing applications in the future. The recommended use
of RotoCanvas in a video editing application is for applying effects
(primarily manual rotoscoping) to source videos (as frame sequences) as
a preprocessing step before they are trimmed or other effects are
added, since rotoscoping is highly dependent on the source frame (base
layer) remaining the same.  Using the RotoCanvas as a post-processing
effect is possible, but accurate frame seeking must be assured somehow
(such as by a frame-accurate video editing engine), and further edits
to the previous layers will in some cases cause the rotoscoped parts
(parts of the image edited by RotoCanvas) to no longer make sense (such
as, if a lens pinch effect is added to a scene where there was a layer
order error that has been rotoscoped out, instead of the error being
rotoscoped out, there will be both the error and a corrected blotch
that is the error's original position & shape), which in such cases
would require redoing the rotoscoping.

### Alternate names
See "~/Nextcloud/d.cs/RotoCanvas/1.RotoCanvas (SEE GitHub instead).txt"

### Backends
#### Python
(Not Tried Yet)
- [moviepy](https://github.com/Zulko/moviepy)
  - [Examples](https://zulko.github.io/moviepy/examples/examples.html)
- https://github.com/colour-science/colour
- <https://github.com/gtaylor/python-colormath>: "A python module that
  abstracts common color math operations. For example, converting from
  CIE L*a*b to XYZ, or from RGB to CMYK
  http://python-colormath.readthedocs.org"
- <https://github.com/mattrobenolt/colors.py>: "Convert colors between
  rgb, hsv, and hex, perform arithmetic, blend modes, and generate
  random colors within boundaries"
- VapourSynth
  - Python equivalent to AviSynth
  - has a cli tool for piping output into ffmpeg or other tools
- ffmpeg
  - See also: the "ffmpeg Notes" section.
  - Possibly bake changes to png files then overlay them onto the video
    (to use frame rate from video automatically):
    `ffmpeg -i foo.mkv -i bar%04d.png -filter_complex "[1:v]format=argb,geq=r='r(X,Y)':a='alpha(X,Y)'[zork]; [0:v][zork]overlay" -vcodec libx264 myresult.mkv`
    - based on
      <https://stackoverflow.com/questions/38753739/ffmpeg-overlay-a-png-image-on-a-video-with-custom-transparency>
      answered Aug 3 '16 at 22:00 RocketNuts
      - overall opacity can be multiplied by prepending a value such
        as `0.5*`, for example: `a=0.5*'alpha(X,Y)'`
      - For no custom opacity (only 2nd layer's alpha), simplify to the
        line in the question at that link:
        `ffmpeg -i foo.mkv -i bar.png -filter_complex "[0:v][1:v]overlay" -vcodec libx264 myresult.mkv`

### RotoCanvas Paint Notes
* The save method is used by both the Save and the Save As actions. The
  save sender is pre-programmed with the format property

### Storage Method
Folder and file structure is as follows, where `<sequenceName>` is
sequence name (such as, if mygreatvideo0000.png is first frame,
`<sequenceName>` is mygreatvideo) and where the base folder (containing
`<sequenceName>` folder) is the folder where the images in an image
sequence are stored:

```
<sequenceName> [folder]
  rotocanvas.yml [not yet implemented]
  frames [folder]
    <frameNumber> [folder; only exists if frame is a keyframe]
      alpha.png [file where only alpha channel is used (and applied to background upon export)--
      alpha is stored separately so when background is edited, only edits are saved (to layer 0),
      reducing storage use; then alpha is applied]
      layers [folder]
        <layerNumber>.png
        <layerNumber>.yml [not yet implemented]
```
* an older considered method:
```
  Storage Format
  *.rotocanvas folder with L folder under it (Layers folder) where * is base name of sequence (excluding sequential numbering)
  folder for each keyframe containing layer files (whether hand-painted movement frame or actual interpolated keyframe)
    Each layer has a png file and a yml file
    YML file specifies:
    paint_type:  # can be:
      mask (use alpha as final alpha, and ignore colors)
      reveal (any transparent areas reveal background--provides a maximum alpha to all previous layers)
      plain (just paint--use normal alpha overlay)
    motion_type:  # can be:
      static (non-interpolated keyframe aka paint)
      interpolated (position[and rotation & scale eventually] interpolated until next)
    interpolation_type:  # can be:
      linear
```


## Credits
* created by Poikilos (see also LICENSE)
* special thanks to the Qt team for ScribbleArea from Qt Examples

*DISCLAIMER: See license.txt*


## Notes on Other Programs
* In some programs, ss;ff denotes drop frame, and ss:ff denotes NON-drop
  frame.
* mplayer is included in megui in the mencoder folder
* Change aspect ratio flag:
  Use DVD Patcher, then test the result by dropping into Sony DVD
  Architect Studio to and playing (will play at specified aspect ratio)

### Get CLI Video Utilities on Windows
(Command-line Interface)
#### ffmpeg
* Install WinFF and add C:\Program Files (x86)\WinFF\ffmpeg.exe to the
  PATH variable, or whatever path to which you installed it.
  - Or, download gui4ffmpeg and unzip it to C:\PortableApps\Video, and
    add C:\PortableApps\Video\gui4ffmpeg to your PATH variable.

#### mplayer & mencoder
* Get **MPlayer for Windows** and add the MPlayer directory to your PATH
  variable. (If you have IntegratorEduImport, you can add
  `%USERPROFILE%\Documents\Projects\IntegratorEduImport\bin\MPlayer`
  to your PATH).
  - or download and unzip **megui** to `C:\PortableApps\Video` and add
    `C:\PortableApps\Video\megui\tools\mencoder` to your PATH.

### FFmpeg Notes
(See also "more" folder and
[IntroCompatiblizer](https://github.com/poikilos/IntroCompatiblizer))
- For a program that has a narrow use case but has additional video
  conversion commands embedded in the Python code as strings, see
  <https://github.com/poikilos/IntroCompatiblizer>.
- Combine videos (this is a one-line command, however, text file works
  better for some reason--see <http://www.github.com/poikilos/IntroCompatiblizer>)
  `ffmpeg -i "concat:Logo4 Animation A 1a0001-0100.avi|Logo4 Animation A 1a101-142.avi" -c copy "Logo4 Animation A 1a combined.avi"`
  * Even with text file, the names may need to be changed automatically
    first to prevent ffmpeg syntax error.
- h.264 avi to mp3 container for Sony software
  `ffmpeg -i "Logo4 Animation A 1b.avi" -acodec libfaac -b:a 128k -vcodec mpeg4 -b:v 1200k -flags +aic+mv4 "Logo4 Animation A 1b.mp4"`
- losslessly split
  `ffmpeg -vcodec copy -acodec copy -ss 00:00:00 -t 00:01:00 -i in.mp4 out.mp4`
  * where time after ss is start as hh:mm:ss, & time after t is duration as hh:mm:ss.
- losslessly change container e.g. from FLV to MP4:
  `ffmpeg -i VideoFile.flv -vcodec copy -acodec copy VideoFile.mp4`
  * allows Premiere Elements to load it (tested where flv was AVC video with AAC audio)
- convert video to image sequence:
  `ffmpeg -i VideoFile.m2v Forensics1a%d.png`
- convert image sequence to video:
  * Tried with image sequence in folder: $HOME\Videos\Projects\Rebel Assault IX\RAIX2b\Scene07 (Lightsaber Duel)\forcegrab\2b4 (2013 3D Hilt flying away and back added)\
  * Force fps such as 29.97: `ffmpeg -r 29.97 -i RAIX2b4-scene-lightsaberduel-shot-forcegrab%04d.png -sameq -r 29.97 output.mp4`
    * #-r forces frame rate to same so no frames are skipped (default is 25 fps, so, for example, converting to 24fps results in 1 lost per second)
      * [failed]ffmpeg -f image2 -i RAIX2b4-scene-lightsaberduel-shot-forcegrab%04d.png VideoFile.mpg
        * NOTE: only failed since "truncated or corrupted" input error occurred, due to using %d when %04d was required (for 4-digit 0-padded frame numbering)
      * [failed]ffmpeg -f png -i RAIX2b4-scene-lightsaberduel-shot-forcegrab%04d.png input -acodec aac -ab 128kb -vcodec mpeg4 -b 1200kb -mbd 2 -flags +4mv+trell -aic 2 -cmp 2 -subcmp 2 -title X final_video.mp4
        * NOTE: only failed since "truncated or corrupted" input error occurred, due to using %d when %04d was required (for 4-digit 0-padded frame numbering)
      * or for iPod:
        * [failed]ffmpeg -f image2 -i RAIX2b4-scene-lightsaberduel-shot-forcegrab%04d.png input -acodec aac -ab 128kb -vcodec mpeg4 -b 1200kb -mbd 2 -flags +4mv+trell -aic 2 -cmp 2 -subcmp 2 -s 320x180 -title X output-ipod.mp4
          * for older ffmpeg only
        * [failed]ffmpeg -r 29.97 -f image2 -i RAIX2b4-scene-lightsaberduel-shot-forcegrab%04d.png -r 29.97 -acodec aac -ab 128k -vcodec mpeg4 -b 1200k -mbd 2 -flags +mv4+aic -trellis 1 -cmp 2 -subcmp 2 -s 320x180 -metadata title=X output-ipod.mp4
          * didn't accept metadata option
        * `ffmpeg -r 29.97 -f image2 -i RAIX2b4-scene-lightsaberduel-shot-forcegrab%04d.png -r 29.97 -acodec aac -ab 128k -vcodec mpeg4 -b 1200k -mbd 2 -flags +mv4+aic -trellis 1 -cmp 2 -subcmp 2 -s 320x180 -metadata title=X output-ipod.mp4`
      * or for YouTube:
        * [failed]ffmpeg -r 30 -i RAIX2b4-scene-lightsaberduel-shot-forcegrab%04d.png -s:v 1280x720 -c:v libx264 -profile:v high -crf 23 -pix_fmt yuv420p -r 30 output-YouTube.mp4
- convert to m2ts (from IntegratorEduImport):
(see also "Selecting codecs and container formats." mplayer.hu. <http://www.mplayerhq.hu/DOCS/HTML/en/menc-feat-selecting-codec.html>. Oct 11, 2012.)
```batch
REM Convert to m2ts (tried using mencoder):
REM mencoder -of help doesn't list mts, only mpeg (MPEG-1&MPEG-2 PS according to mplayerhq.hu), xvid (MPEG-4 ASP), and x264 (MPEG-4 AVC)
REM lavf means that you then specify a libavformat container -- still only has mpg (MPEG-1&MPEG-2 PS according to mplayerhq.hu) & mp4
REM mencoder was originally only meant for AVI so resulting file should be tested, according to mplayerhq.hu
REM mencoder 00394.mts -vf scale=1280:720 -oac copy -fps 60 -ofps 30 -o %USERPROFILE%\Documents\1080-to-720-00394.m2ts
REM mencoder 00394.mts -s hd720 -oac copy -fps 60 -ofps 30 -o %USERPROFILE%\Documents\1080-to-720-00394.m2ts
```
- ffmpeg convert h.264 avi to mp4 container for sony
  `ffmpeg -i "Logo4 Animation A 1b.avi" -acodec libfaac -b:a 128k -vcodec mpeg4 -b:v 1200k -flags +aic+mv4 "Logo4 Animation A 1b.mp4"`
  * Convert to m2ts (using ffmpeg):
    * -y overwrite output files without asking
    * -loglevel 1  is OK too
    * -r doesn't seem to work before input (for forcing framerate)
    * -qscale is deprecated -- says to use -q:v (quantize video) or -q:a (quantize audio) instead
    * "-async <samples per second> to resync audio is deprecated, use asyncts instead"
    * `ffmpeg -y -r 60 -i "00394.mts" -r 30 -aspect 16:9 -qscale 4 -vcodec mpeg2video -acodec copy -f mpegts "%USERPROFILE%\Documents\1080-to-720-00394.m2ts"`
    * `ffmpeg -y -i "00394.mts" -r 30 -s 1280x720 -qscale 4 -vcodec mpeg2video -acodec copy -f mpegts "%USERPROFILE%\Documents\1080-to-720-00394.m2ts"`

- Resize (-s: Scale) mpeg2ts video such as from Canon VIXIA HF G10:
  - `ffmpeg -y -i "00394.mts" -r 30 -s 1280x720 -q:v 4 -vcodec mpeg2video -acodec copy -f mpegts "%USERPROFILE%\Documents\1080-to-720-00394.m2ts"`

- dump sound losslessly:
```bash
  #PART OF SOUND e.g. 1st minute ffmpeg -vcodec copy -acodec copy -s 00:00:00 -t 00:01:00 -i in.flv intro-only1a_480p.flv
  #If multiple audio streams or audio not detected, first get Audio ID: ffmpeg -i "$filename"
  ffmpeg -i "$vidbasename.mp4" -vn -f wav "$vidbasename-audio.wav"
  ffmpeg -i "$vidbasename.mp4" -vn -acodec copy "$vidbasename-audio.m4a"
  ffmpeg -i "$vidbasename.flv" -vn -acodec copy "$vidbasename-audio.mp3"
  #   - where .mp3 a compatible container e.g.:
  #    ffmpeg -i "$vidbasename.ogg" -acodec copy "$vidbasename.mkv"
  #some people do:
  ffmpeg -i video.mpg -acodec copy audio.ac3
  mplayer x.mpg -dumpaudio -dumpfile sound.ac3
  mplayer source_file.vob -aid 129 -dumpaudio -dumpfile sound.ac3
  #  - where 129 is the audio id
```
- extract and recompress incompatible ac3 or other audio stream (allow burning video+audio with Sony DVD Architect; works with wave file input too):
```
  ffmpeg -i video.mpg -ab 224k -ar 48000 -ac 2 -acodec ac3 video.ac3
```
- extract and compress sound:
```
  ffmpeg -i "$vidbasename.mp4" -vn -ar 44100 -ac 2 -ab 192 -f mp3 "$vidbasename-audio.mp3"
```
- Edit video:
  * Split file: `ffmpeg -vcodec copy -ss 00:01:00 -t 00:03:00 -i infile.mpg outfile.mpg`
- Extract from DVD losslessly (not encrypted dvds):
```bash
#ffmpeg -i concat:'VTS_01_1.VOB|VTS_01_2.VOB|VTS_01_3.VOB|VTS_01_4.VOB|VTS_01_5.VOB|VTS_01_6.VOB|VTS_01_7.VOB|VTS_01_8.VOB|VTS_01_9.VOB' -c copy $dest_path/Hi-8-to-DVD-via-Sharp.mpg
#the commands below supposedly also work
#ffmpeg -i 'concat:VTS_01_1.VOB|VTS_01_2.VOB|VTS_01_3.VOB|VTS_01_4.VOB|VTS_01_5.VOB|VTS_01_6.VOB|VTS_01_7.VOB|VTS_01_8.VOB|VTS_01_9.VOB' -c copy $dest_path/Hi-8-to-DVD-via-Sharp.mpg
#ffmpeg -i VTS_01_1.VOB -i VTS_01_2.VOB -i VTS_01_3.VOB -i VTS_01_4.VOB -i VTS_01_5.VOB -i VTS_01_6.VOB -i VTS_01_7.VOB -i VTS_01_8.VOB -i VTS_01_9.VOB -c copy $dest_path/Hi-8-to-DVD-via-Sharp.mpg
```
The commands above produce out-of-order errors due to timestamps starting at 0 at each file
so instead, as per <https://stackoverflow.com/questions/31691943/ffmpeg-concat-poduces-dts-out-of-order-errors> do:
```bash
#ffmpeg -i concat:'VTS_01_1.VOB|VTS_01_2.VOB|VTS_01_3.VOB|VTS_01_4.VOB|VTS_01_5.VOB|VTS_01_6.VOB|VTS_01_7.VOB|VTS_01_8.VOB|VTS_01_9.VOB' -c:v copy -c:a copy $dest_path/Hi-8-to-DVD-via-Sharp.mpg

dest_path=$HOME/Videos/OldFHC,The2017Repair/Media
vid_name=OldFHC,The3a
concat_list=concat.txt
cd /run/media/$USER
cd DVD*
cd VIDEO_TS
#NOTE: if extension is mpg, warning is shown: ac3 in MPEG-1 system streams is not widely supported, consider using the vob or the dvd muxer to force a MPEG-2 program stream.
#echo "file `pwd`/VTS_01_1.VOB" > $dest_path/$concat_list
#echo "file `pwd`/VTS_01_2.VOB" >> $dest_path/$concat_list
#echo "file `pwd`/VTS_01_3.VOB" >> $dest_path/$concat_list
#echo "file `pwd`/VTS_01_4.VOB" >> $dest_path/$concat_list
#echo "file `pwd`/VTS_01_5.VOB" >> $dest_path/$concat_list
#echo "file `pwd`/VTS_01_6.VOB" >> $dest_path/$concat_list
#echo "file `pwd`/VTS_01_7.VOB" >> $dest_path/$concat_list
#echo "file `pwd`/VTS_01_8.VOB" >> $dest_path/$concat_list
#echo "file `pwd`/VTS_01_9.VOB" >> $dest_path/$concat_list
#echo "file VTS_01_1.VOB" > $dest_path/$concat_list
#echo "file VTS_01_2.VOB" >> $dest_path/$concat_list
#echo "file VTS_01_3.VOB" >> $dest_path/$concat_list
#echo "file VTS_01_4.VOB" >> $dest_path/$concat_list
#echo "file VTS_01_5.VOB" >> $dest_path/$concat_list
#echo "file VTS_01_6.VOB" >> $dest_path/$concat_list
#echo "file VTS_01_7.VOB" >> $dest_path/$concat_list
#echo "file VTS_01_8.VOB" >> $dest_path/$concat_list
#echo "file VTS_01_9.VOB" >> $dest_path/$concat_list

#ffmpeg -i VTS_01_1.VOB -c copy -f dvd $dest_path/$vid_name-1of9.mpg
#ffmpeg -i VTS_01_2.VOB -c copy -f dvd $dest_path/$vid_name-2of9.mpg
#ffmpeg -i VTS_01_3.VOB -c copy -f dvd $dest_path/$vid_name-3of9.mpg
#ffmpeg -i VTS_01_4.VOB -c copy -f dvd $dest_path/$vid_name-4of9.mpg
#ffmpeg -i VTS_01_5.VOB -c copy -f dvd $dest_path/$vid_name-5of9.mpg
#ffmpeg -i VTS_01_6.VOB -c copy -f dvd $dest_path/$vid_name-6of9.mpg
#ffmpeg -i VTS_01_7.VOB -c copy -f dvd $dest_path/$vid_name-7of9.mpg
#ffmpeg -i VTS_01_8.VOB -c copy -f dvd $dest_path/$vid_name-8of9.mpg
#ffmpeg -i VTS_01_9.VOB -c copy -f dvd $dest_path/$vid_name-9of9.mpg
#not sure how to use -f mpegps in the following line but that may help according to https://lists.libav.org/pipermail/libav-bugs/2015-September/004286.html
#ffmpeg -f concat -safe 0 -i $dest_path/$concat_list -c copy -fflags +genpts -f dvd $dest_path/$vid_name.mpg
#-safe 0 is needed if using absolute paths (however, relative paths are relative to txt file so that may be difficult/impossible if source is readonly)
#see also https://superuser.com/questions/1150276/trim-video-and-concatenate-using-ffmpeg-getting-non-monotonous-dts-in-output
#ffmpeg -f concat -i $concat_list -c copy output.MTS
#where mylist must have lines like "file filename.MTS" (must have the word 'file')
#above results in faulty timecodes--file won't play back and doesn't have correct length, so...
#see https://wiki.archlinux.org/index.php/dvdbackup#Ripping_the_DVD:
cat VTS_01_*.VOB > $dest_path/$vid_name.VOB
#-y: overwrite
#(added -f dvd though to avoid MPEG-1 and therefore missing AC3 audio)
ffmpeg -y -i $dest_path/$vid_name.VOB -codec:v copy -codec:a copy -f dvd $dest_path/$vid_name.mpeg
#or see https://www.linuxquestions.org/questions/linux-software-2/ffmpeg-trying-to-demux-vob-subtitles-show-up-in-video-stream-785500/:
#mencoder $dest_path/$vid_name.VOB -ovc copy -of rawvideo -nosound -o $dest_path/$vid_name-via-mencoder.mpeg
#or see https://video.stackexchange.com/questions/3187/fix-timecode-in-merged-vobs:
#avconv -i $dest_path/$vid_name.VOB -vf 'setpts=PTS-STARTPTS' -c:a copy -c:v copy $dest_path/$vid_name-repaired-by-mencoder.vob
```
