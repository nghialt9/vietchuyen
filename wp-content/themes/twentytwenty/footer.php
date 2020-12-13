<?php
/**
 * The template for displaying the footer
 *
 * Contains the opening of the #site-footer div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Viet_Chuyen
 * @since Viet Chuyen 1.0
 */

?>
<!-- Footer Start -->
<footer class="main-footer bg">
    <div class="footer-bg">
        <div class="container">
            <div class="footer-row">
                <div class="footer-left">
                    <div class="footer-col about">
                        <a class="navbar-brand" href="<?php echo get_home_url(); ?>"><img
                                src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/logoamban.svg" alt="">
                        </a>
                        <h3><?php echo pll__('CÔNG TY TNHH TM CÔNG NGHỆ VIỆT CHUYÊN SG'); ?></h3>
                        <ul>
                            <li>
                                <img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/truso.svg" alt="">
                                <div>
                                    <span><?php echo pll__('Trụ sở'); ?></span><br>
                                    <?php echo pll__('302, Toà nhà Độc Lập A, Phường Tân Quý, Quận Tân Phú, TP.HCM'); ?>
                                </div>
                            </li>
                            <div class="item-row">
                                <div class="item-left">
                                    <li>
                                        <img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/dienthoai.svg"
                                            alt="">
                                        <div>
                                            <span><?php echo pll__('Điện thoại'); ?></span><br>
                                            <?php echo pll__('(028) 39637678'); ?>
                                        </div>
                                    </li>
                                </div>
                                <div class="item-right">
                                    <li>
                                        <img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/fax.svg" alt="">
                                        <div>
                                            <span><?php echo pll__('FAX'); ?></span><br>
                                            <?php echo pll__('(028) 39637679'); ?>
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <li>
                                <img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/giayphepkinhdoanh.svg"
                                    alt="">
                                <div>
                                    <span><?php echo pll__('Giấy phép kinh doanh số'); ?></span><br>
                                    <?php echo pll__('"0304198513" do Sở Kế Hoạch Đầu Tư TP.HCM cấp ngày 27/01/2006'); ?>
                                </div>
                            </li>
                            <li class="last">
                                <img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/masothue.svg" alt="">
                                <div>
                                    <span><?php echo pll__('Mã số thuế'); ?></span><br>
                                    <?php echo pll__('0304198513'); ?>
                                </div>
                            </li>
                            <li>
                                <span>
                                    <?php echo('Copyright @ 2020 | vietchuyen.com'); ?>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="group">
                        <a class="face" href="https://www.facebook.com/">
                            <img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/facebook.svg" alt="">
                        </a>
                        <a class="youtube" href="https://www.youtube.com/">
                            <img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/youtube.svg" alt="">
                        </a>
                        <a class="in" href="https://www.linkedin.com/">
                            <img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/in.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62712.096755965526!2d106.63502353718317!3d10.772500054351118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ede0aa80245%3A0x2b6b5c4999a448ce!2zNzQwIFPGsCBW4bqhbiBI4bqhbmgsIFBoxrDhu51uZyAxMiwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1607483130626!5m2!1sen!2s"
            width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
            tabindex="0"></iframe>
    </div>
</footer>
<div class="gototop"><img src="<?php echo TEMPLATE_DIR; ?>/../../uploads/2020/12/top-scroll.svg" alt=""></div>

<?php wp_footer(); ?>