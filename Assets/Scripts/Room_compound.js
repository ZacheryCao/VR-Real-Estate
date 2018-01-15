var enter : boolean;
var Gameobject01:GameObject;
var Gameobject02:GameObject;
var Gameobject03:GameObject;
var Gameobject04:GameObject;
var Gameobject05:GameObject;
var Gameobject06:GameObject;
var Gameobject11:GameObject;
var Gameobject12:GameObject;
var Gameobject13:GameObject;
var Gameobject14:GameObject;
var Gameobject15:GameObject;
var Gameobject16:GameObject;
var Gameobject17:GameObject;
var Gameobject18:GameObject;
var Gameobject19:GameObject;
var Gameobject110:GameObject;
var Gameobject111:GameObject;
var Gameobject112:GameObject;
var Gameobject113:GameObject;
var Gameobject114:GameObject;
var Gameobject115:GameObject;

function Update () {
    if(enter == true)
    {
        Gameobject01.SetActive(true);
        Gameobject02.SetActive(true);
        Gameobject03.SetActive(true);
        Gameobject04.SetActive(true);
        Gameobject05.SetActive(true);
        Gameobject06.SetActive(true);
        Gameobject11.SetActive(false);
        Gameobject12.SetActive(false);
        Gameobject13.SetActive(false);
        Gameobject14.SetActive(false);
        Gameobject15.SetActive(false);
        Gameobject16.SetActive(false);
        Gameobject17.SetActive(false);
        Gameobject18.SetActive(false);
        Gameobject19.SetActive(false);
        Gameobject110.SetActive(false);
        Gameobject111.SetActive(false);
        Gameobject112.SetActive(false);
        Gameobject113.SetActive(false);
        Gameobject114.SetActive(false);
        Gameobject115.SetActive(false);
    }

    else
    {
       
    }

}

function OnTriggerEnter(other:Collider)
    {
        if(other.gameObject.tag == "Player")
        {
            (enter) = true;
        }
    }

    function OnTriggerExit(other:Collider)
        {
            if(other.gameObject.tag == "Player")
            {
                (enter) = false;
            }
        }
