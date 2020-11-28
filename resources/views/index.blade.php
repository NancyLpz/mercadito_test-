@extends('layouts.index_template')

@section("content")
    <section id="slider" class="slider-element slider-parallax swiper_wrapper clearfix">
        <div class="slider-parallax-inner">
            <div class="swiper-container swiper-parent">
                <div class="swiper-wrapper">

                    @foreach($sliders as $slider)
                        @if($slider->status == 1)
                            <div class="swiper-slide dark" style="background-image: url('{{ asset('uploads/sliders/' .$slider->imagen) }}');">
                                <div class="container clearfix">
                                    <div class="slider-caption slider-caption-center">
                                        <h2 data-animate="fadeInUp">{{ $slider->titulo }}</h2>
                                        <p class="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">{{ $slider->subtitulo }}</p>
                                    </div>
                                </div>
                            </div>
                        @endif
                    @endforeach

                </div>
                <div class="slider-arrow-left"><i class="icon-angle-left"></i></div>
                <div class="slider-arrow-right"><i class="icon-angle-right"></i></div>
                <div class="slide-number"><div class="slide-number-current"></div><span>/</span><div class="slide-number-total"></div></div>
            </div>

        </div>

    </section>
    <!-- Content
    ============================================= -->
    <section id="content">
        <div class="content-wrap">
            <div class="promo promo-light promo-full bottommargin-lg header-stick notopborder">
                <div class="container clearfix">
                    <h3>
                        {!! $callFirst[0] !!}
                    </h3>
                    <span>{{ $callFirst[1]->valor }}</span>
                    <a href='{{ ($callFirst[2]->valor != NULL ) ? $callFirst[2]->valor : "javascript:void(0)" }}' target="_blank" class="button button-dark button-xlarge button-rounded">{{ $callFirst[3]->valor }}</a>
                </div>
            </div>

            <!-- Features Top -->
            <div class="container clearfix">
                @php
                    $contador = 0;
                @endphp
                @foreach($feature[0] as $icons)
                    @if($icons->status != 0)
                        @if($contador >= 3)
                            <div class="col_one_fourth nobottommargin col_last">
                            @php
                                $contador = 0;
                            @endphp
                        @else
                            <div class="col_one_fourth nobottommargin">
                        @endif
                                <div class="feature-box fbox-center fbox-light fbox-effect nobottomborder">
                                    <div class="fbox-icon">
                                        @if($icons->url != NULL || $icons->url != "")
                                            <a href="{{ $icons->url }}">
                                            @else
                                            <a href="javascript:void(0)">
                                        @endif
                                            <i class="i-alt noborder {{ $icons->imagen }}"></i>
                                        </a>
                                    </div>
                                    <h3>{{ $icons->nombre }}<span class="subtitle"> {{$icons->subtext}} </span></h3>
                                </div>
                            </div>
                    @php
                        $contador ++;
                    @endphp
                    @endif
                @endforeach

                <div class="clear"></div><div class="line bottommargin-lg"></div>

                <!-- Features Middle -->
                <div class="col_two_fifth nobottommargin">
                    @if($video_acerca->valor != NULL || $video_acerca->valor != "")
                        <a href="{{ $video_acerca->valor }}" data-lightbox="iframe">
                    @endif
                        <img src="{{ asset('uploads/parametros/' .$imagen_acerca->valor)}}" alt="Image">
                    @if($video_acerca->valor != NULL || $video_acerca->valor != "")
                        <span class="i-overlay"><img src="{{ asset('img/canva/icons/play.png') }}" alt="Play"></span>
                    @endif
                    </a>
                </div>

                <div class="col_three_fifth nobottommargin col_last">
                    
                    <div class="heading-block">
                   
                        <h2> {{ $titulo_acerca->valor }}</h2>
                    </div>

                    <p> {{$subtitulo_acerca->valor}} </p>

                    <div class="col_half nobottommargin">
                        <ul class="iconlist iconlist-color nobottommargin">
                            {!! $listLeft->valor !!}
                        </ul>
                    </div>

                    <div class="col_half nobottommargin col_last">
                        <ul class="iconlist iconlist-color nobottommargin">
                            {!! $listRight->valor !!}
                        </ul>
                    </div>

                </div>

                <div class="clear"></div>

            </div>

            <!-- Features Bottom -->
            <div class="section topmargin-lg">
                <div class="container clearfix">
                    <div class="heading-block center">
                        <h2>{{ $titles[1]->valor }}</h2>
                        <span>{{ $subtitles[0]->valor }}</span>
                    </div>
                    <div class="clear bottommargin-sm"></div>

                    @foreach($feature[1] as $icons)
                        @if($loop->index == 2 || $loop->index == 5 || $loop->index == 8)
                            <div class="col_one_third col_last">
                        @else
                            <div class="col_one_third">
                        @endif
                                <div class="feature-box fbox-small fbox-plain" data-animate="fadeIn">
                                    <div class="fbox-icon">
                                        <a href='{{ ($icons->url != NULL || $icons->url != "") ? $icons->url : "javascript:void(0)" }}'><i class="{{ $icons->imagen }}"></i></a>
                                    </div>
                                    <h3>{{$icons->nombre}}</h3>
                                    <p>{{$icons->subtext}}</p>
                                </div>
                            </div>
                            @if($loop->index == 2 || $loop->index == 5 || $loop->index == 8)
                                <div class="clear"></div>
                            @endif
                    @endforeach
                </div>
            </div>

            <!-- Galeria -->
            <div class="container clearfix">
                <div class="heading-block center">
                    <h3>{!! $titles[2] !!}</h3>
                    <span>{{ $subtitles[1]->valor }}</span>
                </div>

                <div id="oc-portfolio" class="owl-carousel portfolio-carousel portfolio-nomargin carousel-widget" data-margin="1" data-pagi="false" data-autoplay="5000" data-items-xs="1" data-items-sm="2" data-items-md="3" data-items-xl="4">
                    @foreach($galeria as $galeria)
                        @if($galeria->status != 0)
                            <div class="oc-item">
                                <div class="iportfolio">
                                    <div class="portfolio-image">
                                        <a href="portfolio-single.html">
                                            <img src="{{ asset('uploads/galeria/' .$galeria->imagen) }}" alt="Open Imagination">
                                        </a>
                                        <div class="portfolio-overlay">
                                            <a href="{{('uploads/galeria/full/' .$galeria->imagen)}}" class="center-icon" data-lightbox="image"><i class="icon-line-plus"></i></a>
                                            <!--<a href="portfolio-single.html" class="right-icon"><i class="icon-line-ellipsis"></i></a>-->
                                        </div>
                                    </div>
                                    <div class="portfolio-desc">
                                        <h3><a href="portfolio-single.html">{{ $galeria->titulo }}</a></h3>
                                        <span><a href="#">{{ $galeria->descripcion }}</a></span>
                                    </div>
                                </div>
                            </div>  
                        @endif
					@endforeach
                </div>
            </div>

            <!-- Testimonials -->
            <div class="section topmargin-sm nobottommargin">
                <div class="container clearfix">
                    <div class="heading-block center">
                        <h3>{{ $titles[3]->valor }}</h3>
                        <span>{{ $subtitles[2]->valor }}</span>
                    </div>

                    <ul class="testimonials-grid grid-3 clearfix nobottommargin">
						@foreach($testimonials as $content)
							@if($content->status == 1)
								<li>
									<div class="testimonial">
										<div class="testi-image">
											<a href="javascript:void(0)"><img src="{{ asset('uploads/testimonios/'. $content->imagen) }}" alt="Customer Testimonails"></a>
										</div>
										<div class="testi-content">
											<p>{{ $content->texto }}</p>
											<div class="testi-meta">
												{{ $content->nombre }}
												<span>{{ $content->ubicacion }}</span>
											</div>
										</div>
									</div>
								</li>
							@endif
						@endforeach
                    </ul>
                </div>
            </div>

            <!-- MARCAS -->
            <div class="container clearfix">
                <div id="oc-clients" class="owl-carousel owl-carousel-full image-carousel carousel-widget" data-margin="30" data-loop="true" data-nav="false" data-autoplay="5000" data-pagi="false" data-items-xs="2" data-items-sm="3" data-items-md="4" data-items-lg="5" data-items-xl="6" style="padding: 20px 0;">
                    @foreach($marcas as $marca)
                        @if($marca->status != 0)
						    <div class="oc-item"><a href='{{ ($marca->link != NULL || $marca->link != "") ? $marca->link : "javascript:void(0)"}}'><img src="{{ asset('uploads/marcas/' .$marca->imagen) }}" alt="{{ $marca->titulo}}" title="{{ $marca->titulo }}"></a></div>
                        @endif                    
                    @endforeach  
                </div>
            </div>

            <a href="javascript:void(0)" class="button button-full center tright footer-stick">
                <div class="container clearfix">
					{!! $callLast->valor !!}
                </div>
            </a>
        </div>
    </section><!-#content end -->
@endsection

@section("css")
@endsection

@section("js")
    <script>
        let primary = '{{$primary->valor}}';
        let p_li = '{{$p_li->valor}}';
        let t_foo = '{{$t_foo->valor}}';
        let b_c = '{{$b_c->valor}}';
        let b_c_s = '{{$b_c_s->valor}}';
        let b_cm = '{{$b_cm->valor}}';
        let b_cp = '{{$b_cp->valor}}';

        document.documentElement.style.setProperty('--primary-color', primary);
        document.documentElement.style.setProperty('--p_li-color', p_li);
        document.documentElement.style.setProperty('--t_foo-color', t_foo);

        document.documentElement.style.setProperty('--c_bg', b_c);
        document.documentElement.style.setProperty('--c_bg_s', b_c_s);
        document.documentElement.style.setProperty('--t_m-color', b_cm);
        document.documentElement.style.setProperty('--c_cp', b_cp);
    </script>
@endsection