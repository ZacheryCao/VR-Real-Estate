var smooth = 2.0;
var DoorOpenAngle = 0.0;
var DoorCloseAngle =270.0;
var open : boolean;
var enter : boolean;
 
/*
function Start()
{
    defaultRot = transform.eulerAngles;
    openRot = new Vector3 (defaultRot.x, defaultRot.y + DoorOpenAngle, defaultRot.z);
}
*/
 
//Main function
function Update ()
{
    if(open)
    {
        var target = Quaternion.Euler(0, DoorOpenAngle,0);
        transform.localRotation = Quaternion.Slerp(transform.localRotation, target, Time.deltaTime * smooth);
    }
    if (open == false)
    {
        var target1 = Quaternion.Euler(0, DoorCloseAngle,0);
        transform.localRotation = Quaternion.Slerp(transform.localRotation, target1, Time.deltaTime * smooth);
    }
 
    if(enter == true)
    {
        if (Input.GetButton("AButton"))
        {
            (open) = true;
        }
        else if (Input.GetButton("BButton"))
        {
            (open) = false;
        }
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


