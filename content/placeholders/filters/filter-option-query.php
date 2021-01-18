<?php

use Brizy_Content_Context as Context;
use Brizy_Content_ContentPlaceholder as ContentPlaceholder;

class Brizy_Content_Placeholders_Filters_FilterOptionQuery
{

    private $context;
    private $optionObject;

    public function __construct(Context $context, $optionObject)
    {
        $this->context = $context;
        $this->optionObject = $optionObject;
    }

    public function getWPQueryParams()
    {
        if(!is_object($this->optionObject))
            return [];

        $optionObjectType = get_class($this->optionObject);

        switch ($optionObjectType) {
            case WP_Post::class:
                $params['post__in'][] = (int)$this->optionObject->ID;
                break;
            case WP_User::class:
                $params['author__in'][] = (int)$this->optionObject->ID;
                break;
            case WP_Term::class:
                $params['tax_query'][] =
                    [
                        'taxonomy' => $this->optionObject->taxonomy,
                        'field' => 'term_id',
                        'terms' => (array)$this->optionObject->term_id,
                    ];
                break;
        }

        return $params;
    }
}
