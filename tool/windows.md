# windows

## ubuntu 安装 win10 系统

### `sudo usb-creator-gtk`

### dd command

使用 linux 本身自带的命令`dd`: 主板必须把这个 U 盘识别为 USB-CDROM 才行。大概是因为 BIOS 需要的引导纪录在 windows 光盘映像里面不存在。所以我们这里需要为 u 盘安装一个引导纪录

### deepin 启动盘

deepin 制作的启动盘： 可以制作，但是不知道为什么无法启动

### WoeUSB

[WoeUSB](https://www.fossmint.com/woeusb-create-bootable-windows-usb-sticks-from-linux/):推荐这种方式安装,下载之后通过 `woeusbgui` 命令启动

## QA

### [无法在驱动器 0 的分区 1 上安装 windows](https://blog.csdn.net/AinUser/article/details/54836081)

1. 在当前安装界面按住 Shift+F10 调出命令提示符窗口；
2. 输入 diskpart，按回车执行；
   3、进入 DISKPART 命令模式，输入 list disk 回车，列出当前磁盘信息；
   4、要转换磁盘 0 格式，则输入 select disk 0 回车，输入 clean，删除磁盘分区；
   5、输入 convert mbr，回车，将磁盘转换为 MBR，输入 convert gpt 则转为 GPT；
