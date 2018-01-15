var smooth = 2.0;
var DoorOpenAngle = 90.0;
var DoorCloseAngle =-90.0;
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
        var target = Quaternion.Euler(DoorOpenAngle,90,90);
        transform.localRotation = Quaternion.Slerp(transform.localRotation, target, Time.deltaTime * smooth);
    }
    if (!open)
    {
        var target1 = Quaternion.Euler(DoorCloseAngle,90,90);
        transform.localRotation = Quaternion.Slerp(transform.localRotation, target1, Time.deltaTime * smooth);
    }
 
    if(enter)
    {
        if (Input.GetKeyDown("f") && !open)
        {
            open = true;
        }
        else if (Input.GetKeyDown("f") && open)
        {
            open = false;
        }
    }
}

function OnTriggerEnter(other:Collider)
    {
        if(other.gameObject.tag == "Player")
        {
            enter = true;
        }
    }

    function OnTriggerExit(other:Collider)
        {
            if(other.gameObject.tag == "Player")
            {
                enter = false;
            }
        }


